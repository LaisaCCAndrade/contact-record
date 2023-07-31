import { AppDataSource } from '../../data-source'
import { Contacts } from '../../entities/contacts.entities'

export const updateContactService = async (id: string, payload: any) => {
  const contactRepository = AppDataSource.getRepository(Contacts)
  await contactRepository.update(id, { ...payload })
  const contactUpdated = await contactRepository.findOneBy({ id })

  return contactUpdated
}
