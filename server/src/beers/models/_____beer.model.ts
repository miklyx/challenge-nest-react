import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class Beer {
  @Field((type) => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  price: number;

}