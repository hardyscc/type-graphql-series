import { Field, ID, ObjectType, Root } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity("usr")
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
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

  @Column()
  loginCount: number;

  // @Column("bool", { default: false })
  // confirmed: boolean;
}
