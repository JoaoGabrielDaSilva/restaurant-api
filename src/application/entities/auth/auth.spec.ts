import { faker } from '@faker-js/faker';
import { Auth } from './auth';

describe('Auth', () => {
  it('should be able to create an auth entity', () => {
    const sut = new Auth({
      accessToken: faker.random.alphaNumeric(100),
      refreshToken: faker.random.alphaNumeric(100),
    });

    expect(sut).toBeTruthy();
  });
});
