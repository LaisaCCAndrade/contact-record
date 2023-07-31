import cors from "cors";
import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { userRoutes } from "./routes/users.routes";
import { handlerAppError } from "./middlewares/handlerAppError.middleware";
import { contactsRoutes } from "./routes/contacts.routes";
import { loginRoutes } from "./routes/login.routes";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*"
  })
);

app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/contacts", contactsRoutes);

app.use(handlerAppError);

export default app;
