import { z } from "zod";

const contactSchema = z.object({
  name: z.string().max(120),
  email: z.string().email().max(45),
  phone: z.string().max(14),
});

const contactSchemaResponse = z.object({
  id: z.string().uuid().optional(),
  ...contactSchema.shape,
  createdAt: z.string().optional(),
});

const allContactsSchema = contactSchemaResponse.array();

const contactUpdateSchema = contactSchema.partial();

export {
  contactSchema,
  contactSchemaResponse,
  allContactsSchema,
  contactUpdateSchema,
};
