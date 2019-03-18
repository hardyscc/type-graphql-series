import { Field, ID, ObjectType, Root } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";
import { Note } from "./Note";

@ObjectType()
@Entity("usr")
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  uuid: string;

  @Field()
  @Column()
  firstName: string;

  @Field()
  @Column()
  lastName: string;

  @Field()
  @Column()
  email: string;

  @Field()
  name(@Root() parent: User): string {
    return `${parent.firstName} ${parent.lastName}`;
  }

  @Column()
  password: string;

  @Column("int", { default: 0 })
  loginCount: number;

  @Column("bit", { default: false })
  confirmed: boolean;

  @OneToMany(() => Note, note => note.user)
  notes: Note[];
}
