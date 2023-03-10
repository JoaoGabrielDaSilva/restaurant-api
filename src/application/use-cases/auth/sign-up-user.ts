import { Auth } from '@application/entities/auth/auth';
import { Email } from '@application/entities/user/email';
import { User } from '@application/entities/user/user';
import { UsersRepository } from '@application/repositories/users-repository';
import { BcryptService } from '@infra/auth/bcrypt/bcrypt.service';
import { JwtService } from '@infra/auth/jwt/jwt.service';
import { Injectable } from '@nestjs/common';

interface SignUpUserRequest {
  name: string;
  email: string;
  password: string;
  role: string;
}

interface SignUpUserResponse {
  user: User;
  authorization: Auth;
}

@Injectable()
export class SignUpUser {
  constructor(
    private usersRepository: UsersRepository,
    private bcryptService: BcryptService,
    private jwtService: JwtService,
  ) {}

  async execute(request: SignUpUserRequest): Promise<SignUpUserResponse> {
    const { name, email, password, role } = request;

    const hashedPassword = this.bcryptService.hash(password);

    const user = new User({
      name,
      email: new Email(email),
      password: hashedPassword,
      role,
    });

    await this.usersRepository.create(user);

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
