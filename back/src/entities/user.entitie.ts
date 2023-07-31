import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Contacts } from "./contacts.entities";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  phone: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @OneToMany(() => Contacts, (contact) => contact.user, { cascade: true })
  contacts: Contacts[];
}

export { User };
