import { Field } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => Number)
  uid: number;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column()
  email: string;

  @Field(() => Number)
  @Column()
  password: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
