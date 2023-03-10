import { User } from '@application/entities/user/user';

export abstract class UsersRepository {
  abstract create(user: User): Promise<void>;

  abstract findByEmail(email: string): Promise<User>;
}
