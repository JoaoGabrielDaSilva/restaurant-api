import { faker } from '@faker-js/faker';
import { Email } from './email';

describe('Email', () => {
  it('should be able to create an e-mail', () => {
    const sut = new Email(faker.internet.email());

    expect(sut).toBeTruthy();
  });
  it('should not be able to create a user if email is invalid', () => {
    expect(() => new Email(faker.random.alphaNumeric())).toThrow();
  });
});
