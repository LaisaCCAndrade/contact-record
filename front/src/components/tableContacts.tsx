"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";
import axios from "axios";
import { Dispatch, SetStateAction, useState } from "react";
import {
  Box,
  InputAdornment,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  color: "#000000",
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

interface UpdatedUserData {
  name: string;
  email: string;
  phone: string;
}

interface IUser {
  name: string;
  email: string;
  phone: string;
  id: string;
}

export default function DataTable({
  users,
  setUsers,
}: {
  users: IUser[];
  setUsers: Dispatch<SetStateAction<IUser[]>>;
}) {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const [editingUserId, setEditingUserId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const storedToken = localStorage.getItem("@TOKEN");
  const token = storedToken ?? "null";

  const handleSaveEdit = () => {
    const updatedUserData: UpdatedUserData = {
      name: name,
      email: email,
      phone: phone,
    };

    handleEdit(editingUserId, updatedUserData);
    handleEditModalClose();
  };

  const handleEditModalOpen = (user: IUser) => {
    setEditingUserId(user.id);
    setName(user.name);
    setEmail(user.email);
    setPhone(user.phone);
    setOpen(true);
  };

  const handleEditModalClose = () => {
    setOpen(false);
    setEditingUserId("");
    setName("");
    setEmail("");
    setPhone("");
  };

  function handleDeleted(id: string) {
    axios.delete(
      `http://localhost:3000/contacts/${id}`,

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }
  const handleDelete = (id: string) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
    handleDeleted(id);
  };

  const handleEdited = (id: string, updatedUserData: UpdatedUserData) => {
    axios.patch(
      `http://localhost:3000/contacts/${id}`,
      {
        ...updatedUserData,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };

  const handleEdit = (id: string, updatedUserData: UpdatedUserData) => {
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, ...updatedUserData } : user
    );

    setUsers(updatedUsers);
    handleEdited(id, updatedUserData);
  };

  return (
    <div>
      {users.length === 0 ? (
        <h1>No contats</h1>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Contact name</StyledTableCell>
                <StyledTableCell align="right">Email</StyledTableCell>
                <StyledTableCell align="right">Phone</StyledTableCell>
                <StyledTableCell align="right"></StyledTableCell>
                <StyledTableCell align="right"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <StyledTableRow key={user.name}>
                  <StyledTableCell component="th" scope="user">
                    {user.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{user.email}</StyledTableCell>
                  <StyledTableCell align="right">{user.phone}</StyledTableCell>
                  <StyledTableCell></StyledTableCell>
                  <StyledTableCell>
                    <Stack direction="row" spacing={2}>
                      <Button
                        className="bg-green-400 w-[100%]"
                        variant="contained"
                        color="success"
                        startIcon={<EditIcon />}
                        onClick={() => handleEditModalOpen(user)}
                      >
                        To edit
                      </Button>
                    </Stack>
                    <br />
                    <Stack>
                      <Button
                        variant="outlined"
                        color="error"
                        startIcon={<DeleteIcon />}
                        onClick={() => handleDelete(user.id)}
                      >
                        Delete
                      </Button>
                    </Stack>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="relative p-4">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Update contact
            </Typography>
            <button
              onClick={handleClose}
              className="absolute top-0 right-0 m-5 font-bold"
            >
              X
            </button>
            <form className="mt-4">
              <div className="mb-4">
                <TextField
                  onChange={(e) => setName(e.target.value)}
                  id="input-with-icon-textfield"
                  label="Name"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
              </div>
              <div className="mb-4">
                <TextField
                  onChange={(e) => setEmail(e.target.value)}
                  id="input-with-icon-textfield"
                  label="Email"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
              </div>
              <div className="mb-4">
                <TextField
                  onChange={(e) => setPhone(e.target.value)}
                  id="input-with-icon-textfield"
                  label="Phone"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocalPhoneIcon />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
              </div>
              <div className="flex items-center justify-end">
                <button
                  className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={handleSaveEdit}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
