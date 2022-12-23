import { IsEmail, IsNotEmpty } from 'class-validator';

export class SignInUserBody {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
