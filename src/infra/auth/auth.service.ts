import { Auth } from '@application/entities/auth/auth';
import { User } from '@application/entities/user/user';
import { UsersRepository } from '@application/repositories/users-repository';
import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usersRepository: UsersRepository) {}

  async signUp(user: User): Promise<Auth> {
    const auth = this.getTokens(user);

    return auth;
  }

  async signIn(user: User, password: string): Promise<Auth> {
    const isPasswordRight = bcrypt.compareSync(password, user.password.value);

    if (!isPasswordRight) throw new Error('Invalid credentials');

    const auth = this.getTokens(user);

    return auth;
  }

  private validateToken(token: string): boolean {
    const isAuthorized = jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET);

    return !!isAuthorized;
  }

  private getTokens(data: User): Auth {
    const { id, email } = data;

    const accessToken = jwt.sign(
      { sub: id, email: email.value },
      process.env.JWT_ACCESS_TOKEN_SECRET,
      {
        expiresIn: '20s',
      },
    );
    const refreshToken = jwt.sign(
      { sub: id, email: email.value },
      process.env.JWT_REFRESH_TOKEN_SECRET,
    );

    const auth = new Auth({ accessToken, refreshToken });

    return auth;
  }
}
