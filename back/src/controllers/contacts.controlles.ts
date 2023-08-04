import { Request, Response } from "express";
import { createContactsService } from "../services/contacts/createContacts.service";
import { listContactsService } from "../services/contacts/listContacts.service";
import { updateContactService } from "../services/contacts/updateContact.service";
import { deleteContactService } from "../services/contacts/deleteContact.service";
import { Contacts } from "../entities/contacts.entities";

const createContactController = async (req: Request, res: Response) => {
  const userId = res.locals.userId;
  try {
    const newContact = await createContactsService(req.body, userId);
    return res.status(201).json(newContact);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const listContactsController = async (req: Request, res: Response) => {
  const userId = res.locals.userId;
  const contacts = await listContactsService(userId);

  return res.json(contacts);
};

const updateContactController = async (req: Request, res: Response) => {
  const updateContact = await updateContactService(req.body, req.params.id);

  return res.json(updateContact);
};

const deleteContactController = async (req: Request, res: Response) => {
  await deleteContactService(req.params.id);

  return res.status(204).send();
};

export {
  createContactController,
  listContactsController,
  updateContactController,
  deleteContactController,
};
