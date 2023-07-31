import { z } from "zod";
import { contactSchema } from "../schemas/constacts.schema";

type TContactRequest = z.infer<typeof contactSchema>;

type TContact = z.infer<typeof contactSchema>;

export { TContact, TContactRequest };
