import { Auth } from '@application/entities/auth/auth';
import { User } from '@application/entities/user/user';
import { UsersRepository } from '@application/repositories/users-repository';
import { BcryptService } from '@infra/auth/bcrypt/bcrypt.service';
import { JwtService } from '@infra/auth/jwt/jwt.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InvalidCredentials } from '../errors/invalid-credentials';

interface SignInUserRequest {
  email: string;
  password: string;
}

interface SignInUserResponse {
  user: User;
  authorization: Auth;
}

@Injectable()
export class SignInUser {
  constructor(
    private usersRepository: UsersRepository,
    private bcryptService: BcryptService,
    private jwtService: JwtService,
  ) {}

  async execute(request: SignInUserRequest): Promise<SignInUserResponse> {
    const { email, password } = request;

    const user = await this.usersRepository.findByEmail(email);

    if (!user) throw new Error('User not found');

    const passwordsMatch = this.bcryptService.compare(password, user.password);

    if (!passwordsMatch) throw new InvalidCredentials();

    const authorization = this.jwtService.generateTokens({
      sub: user.id,
      email: user.email,
    });

    return {
      user,
      authorization,
    };
  }
}
