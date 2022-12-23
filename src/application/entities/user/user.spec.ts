import { User } from './user';
import { faker } from '@faker-js/faker';
import { Email } from './email';

describe('User', () => {
  it('should be able to create a user', async () => {
    const sut = new User({
      name: faker.name.fullName(),
      createdAt: new Date(),
      email: new Email(faker.internet.email()),
      role: faker.helpers.arrayElement(['ADMIN', 'CUSTOMER']),
      updatedAt: new Date(),
      password: faker.internet.password(),
    });

    expect(sut).toBeTruthy();
  });
});
