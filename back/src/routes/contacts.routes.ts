import { Router } from "express";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import { contactSchema } from "../schemas/constacts.schema";
import { createContactController, deleteContactController, listContactsController, updateContactController } from "../controllers/contacts.controlles";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middleware";

const contactsRoutes = Router();

contactsRoutes.post(
  "/:id", 
  ensureAuthMiddleware,
  ensureDataIsValid(contactSchema),
  createContactController
);

contactsRoutes.get(
  "/:id", 
  ensureAuthMiddleware,
  listContactsController
);

contactsRoutes.patch(
  "/:id", 
  ensureAuthMiddleware,
  updateContactController
);

contactsRoutes.delete(
  "/:id", 
  ensureAuthMiddleware,
  deleteContactController
);

export { contactsRoutes };
