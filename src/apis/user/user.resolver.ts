import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { signUpInput } from './dto/signgUp.input';
import { User } from './entities/user.entity';

@Resolver()
export class UserResolver {
  @Query(() => String)
  userInfo() {
    return '유저정보 ㅎㅎㅎ';
  }

  @Mutation(() => String)
  signUp(@Args('signUpInput') signUpInput: signUpInput) {
    return '회원가입이 완료 되었습니다.';
  }
}
