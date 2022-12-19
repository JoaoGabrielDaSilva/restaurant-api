import * as bcrypt from 'bcrypt';

export class Password {
  private password: string;

  constructor(value: string) {
    const hashedPassword = this.hashPassword(value);

    this.password = hashedPassword;
  }

  public get value(): string {
    return this.password;
  }

  private hashPassword(password: string) {
    const hash = bcrypt.hashSync(password, 10);

    return hash;
  }
}
