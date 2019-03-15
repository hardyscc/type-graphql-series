import { Field, ObjectType, Root } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@ObjectType()
@Entity("usr")
export class User extends BaseEntity {
  // @Field(() => ID)
  // @PrimaryColumn()
  // id: number;

  @Field()
  @Column()
  firstName: string;

  @Field()
  @Column()
  lastName: string;

  @Field()
  @PrimaryColumn({ unique: true })
  email: string;

  @Field({ complexity: 3 })
  name(@Root() parent: User): string {
    return `${parent.firstName} ${parent.lastName}`;
  }

  @Column()
  password: string;

  // @Column("bool", { default: false })
  // confirmed: boolean;
}
