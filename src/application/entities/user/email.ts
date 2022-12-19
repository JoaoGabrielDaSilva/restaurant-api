export class Email {
  private email: string;

  constructor(value: string) {
    const isValid = this.validateEmailFormat(value);

    if (!isValid) throw new Error('Invalid e-mail');

    this.email = value;
  }

  public get value(): string {
    return this.email;
  }

  private validateEmailFormat(value: string) {
    return value.includes('@') && value.includes('.com');
  }
}
