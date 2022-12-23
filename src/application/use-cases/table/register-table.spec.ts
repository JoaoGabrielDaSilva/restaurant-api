import { faker } from '@faker-js/faker';

import { RegisterTable } from './register-table';
import { randomUUID } from 'crypto';
import { InMemoryTablesRepository } from '@test/repositories/in-memory-tables-repository';

describe('Register table', () => {
  it('should be able to register a table', async () => {
    const tablesRepository = new InMemoryTablesRepository();

    const sut = new RegisterTable(tablesRepository);

    sut.execute({
      number: faker.random.numeric(2),
      restaurantId: randomUUID(),
    });

    expect(sut).toBeTruthy();
  });
});
