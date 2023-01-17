import { Resolver, Query, Mutation } from '@nestjs/graphql';
import { BoardService } from './user.service';

@Resolver()
export class BoardResolver {
  constructor(private readonly boardService: BoardService) {}

  @Query(() => String)
  fetchBoards(): string {
    return this.boardService.findAll();
  }

  @Mutation(() => String)
  createBoard(): string {
    return this.boardService.create();
  }
}
