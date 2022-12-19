import { Auth } from '@application/entities/auth/auth';
import { Email } from '@application/entities/user/email';
import { Password } from '@application/entities/user/password';
import { Role, User } from '@application/entities/user/user';
import { UsersRepository } from '@application/repositories/users-repository';
import { Injectable } from '@nestjs/common';

interface SignUpUserRequest {
  name: string;
  email: string;
  password: string;
  role: Role;
}

interface SignUpUserResponse {
  user: User;
}

@Injectable()
export class SignUpUser {
  constructor(private usersRepository: UsersRepository) {}

  async execute(request: SignUpUserRequest): Promise<SignUpUserResponse> {
    const { name, email, password, role } = request;

    const user = new User({
      name,
      email: new Email(email),
      password: new Password(password),
      role,
    });

    await this.usersRepository.create(user);

    return {
      user,
    };
  }
}
