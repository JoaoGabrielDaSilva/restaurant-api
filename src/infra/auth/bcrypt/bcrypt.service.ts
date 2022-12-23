import * as bcrypt from 'bcrypt';

export class BcryptService {
  compare(password: string, hash: string): boolean {
    const isPasswordRight = bcrypt.compareSync(password, hash);

    return !!isPasswordRight;
  }

  hash(password: string): string {
    const hashedPassword = bcrypt.hashSync(password, 10);

    return hashedPassword;
  }
}
