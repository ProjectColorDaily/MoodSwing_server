import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class signUpInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;

  @Field(() => String, { nullable: true })
  birth: string;
}
