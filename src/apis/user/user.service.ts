import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardService {
  findAll(): string {
    // 데이터 조회하는 로직

    return '조회에 성공하였습니다.';
  }

  create(): string {
    // 데이터 등록하는 로직

    return '등록에 성공하였습니다.';
  }
}
