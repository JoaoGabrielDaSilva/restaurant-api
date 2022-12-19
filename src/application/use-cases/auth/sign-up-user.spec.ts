import { SignUpUser } from './sign-up-user';
import { InMemoryUsersRepository } from '@test/repositories/in-memory-users-repository';
import { faker } from '@faker-js/faker';
import { Role } from '@application/entities/user/user';

describe('Sign up user', () => {
  it('should be able to sign up a user', async () => {
    const usersRepository = new InMemoryUsersRepository();
    const signUpUser = new SignUpUser(usersRepository);

    const { user } = await signUpUser.execute({
      name: faker.name.fullName(),
      email: faker.internet.email(),
      role: faker.helpers.arrayElement([Role.ADMIN, Role.CUSTOMER]),
      password: faker.internet.password(),
    });

    expect(user).toBeTruthy();
  });
});
