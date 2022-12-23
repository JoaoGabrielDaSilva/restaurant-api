import { SignInUser } from '@application/use-cases/auth/sign-in-user';
import { SignUpUser } from '@application/use-cases/auth/sign-up-user';
import { JwtGuard } from '@infra/auth/guards/jwt-guard';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { SignInUserBody } from '../dtos/auth/sign-in-user-body';
import { SignUpUserBody } from '../dtos/auth/sign-up-user-body';
import { AuthViewModel } from '../view-models/auth-view-model';
import { UserViewModel } from '../view-models/user-view-model';

@Controller('auth')
export class AuthController {
  constructor(private signUpUser: SignUpUser, private signInUser: SignInUser) {}

  @Post('sign-up')
  async signUp(@Body() body: SignUpUserBody) {
    const { name, email, password, role } = body;

    const { authorization, user } = await this.signUpUser.execute({
      name,
      email,
      password,
      role,
    });

    return {
      authorization: AuthViewModel.toHTTP(authorization),
      user: UserViewModel.toHTTP(user),
    };
  }
  @Post('sign-in')
  async signIn(@Body() body: SignInUserBody) {
    const { email, password } = body;

    const { authorization, user } = await this.signInUser.execute({
      email,
      password,
    });

    return {
      authorization: AuthViewModel.toHTTP(authorization),
      user: UserViewModel.toHTTP(user),
    };
  }
}
