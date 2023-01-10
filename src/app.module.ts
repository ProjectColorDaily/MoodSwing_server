import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { FooResolver } from './apis/user/user.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/common/graphql/schema.gql',
    }),
   TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3000,
      username: 'master',
      password: 'master',
      database: 'mood_swing_db',
      entities: [__dirname + '/apis/**/*.entity.ts'],
      synchronize: true,
      logging: true,
    }),
  ],
  providers: [FooResolver],
})
export class AppModule {}
