import { AppDataSource } from '../../data-source'
import { Contacts } from '../../entities/contacts.entities'

export const deleteContactService = async (id: string) => {
  const contactRep = AppDataSource.getRepository(Contacts)
  await contactRep.delete({ id })
}
