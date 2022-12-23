import { SignUpUser } from './sign-up-user';
import { InMemoryUsersRepository } from '@test/repositories/in-memory-users-repository';
import { faker } from '@faker-js/faker';
import { BcryptService } from '@infra/auth/bcrypt/bcrypt.service';
import { JwtService } from '@infra/auth/jwt/jwt.service';

describe('Sign up user', () => {
  it('should be able to sign up a user', async () => {
    const usersRepository = new InMemoryUsersRepository();
    const encrypter = new BcryptService();
    const jwtService = new JwtService();
    const signUpUser = new SignUpUser(usersRepository, encrypter, jwtService);

    const { user } = await signUpUser.execute({
      name: faker.name.fullName(),
      email: faker.internet.email(),
      role: faker.helpers.arrayElement(['ADMIN', 'CUSTOMER']),
      password: faker.internet.password(),
    });

    expect(user).toBeTruthy();
  });
});
