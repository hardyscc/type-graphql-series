import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import { User } from "./User";

@ObjectType()
@Entity()
export class Note extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  uuid: string;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  detail: string;

  @ManyToOne(() => User, user => user.notes)
  user: User;
}
