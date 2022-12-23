import { UsersRepository } from '@application/repositories/users-repository';
import { HttpModule } from '@infra/http/http.module';
import { Module } from '@nestjs/common';
import { InMemoryUsersRepository } from '@test/repositories/in-memory-users-repository';
import { BcryptService } from './bcrypt/bcrypt.service';
import { JwtService } from './jwt/jwt.service';

@Module({
  providers: [
    {
      provide: UsersRepository,
      useClass: InMemoryUsersRepository,
    },
    BcryptService,
    JwtService,
  ],
  exports: [BcryptService, JwtService],
})
export class AuthModule {}
