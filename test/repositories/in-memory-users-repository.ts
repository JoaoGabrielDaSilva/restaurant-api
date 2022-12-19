import { User } from '@application/entities/user/user';
import { UsersRepository } from '@application/repositories/users-repository';

export class InMemoryUsersRepository implements UsersRepository {
  private users: User[] = [];

  async findByEmail(email: string): Promise<User> {
    const user = this.users.find((item) => item.email.value === email);

    return user;
  }

  async create(user: User): Promise<void> {
    this.users.push(user);
  }
}
