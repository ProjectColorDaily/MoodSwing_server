import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { BoardResolver } from './user.resolver';
import { BoardService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    BoardResolver, //
    BoardService,
  ],
})
export class UserModule {}
