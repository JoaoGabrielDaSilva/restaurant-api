import { faker } from '@faker-js/faker';
import { randomUUID } from 'crypto';
import { Table } from './table';

describe('Table', () => {
  it('should be able to create a table', async () => {
    const sut = new Table({
      number: faker.random.numeric(2),
      restaurantId: randomUUID(),
    });

    expect(sut).toBeTruthy();
  });
});
