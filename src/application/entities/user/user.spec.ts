import { Role, User } from './user';
import { faker } from '@faker-js/faker';
import { Email } from './email';
import { Password } from './password';

describe('User', () => {
  it('should be able to create a user', async () => {
    const sut = new User({
      name: faker.name.fullName(),
      createdAt: new Date(),
      email: new Email(faker.internet.email()),
      role: faker.helpers.arrayElement([Role.ADMIN, Role.CUSTOMER]),
      updatedAt: new Date(),
      password: new Password('Senha-Teste'),
    });

    expect(sut).toBeTruthy();
  });
});
