import { UsersRepository } from '@application/repositories/users-repository';
import { Module } from '@nestjs/common';
import { InMemoryUsersRepository } from '@test/repositories/in-memory-users-repository';

@Module({
  providers: [
    {
      provide: UsersRepository,
      useClass: InMemoryUsersRepository,
    },
  ],
})
export class AuthModule {}
