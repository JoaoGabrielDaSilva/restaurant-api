import * as bcrypt from 'bcrypt';
import { Password } from './password';
import { faker } from '@faker-js/faker';

describe('Password', () => {
  it('should be able to create a password', () => {
    const sut = new Password(faker.random.alphaNumeric(10));

    expect(sut).toBeTruthy();
  });

  it('should be able to create an encrypted password', () => {
    const password = faker.random.alphaNumeric(10);
    const sut = new Password(password);

    const passwordsMatch = bcrypt.compareSync(password, sut.value);

    expect(password).not.toBe(sut.value);
    expect(passwordsMatch).toBe(true);
  });
});
