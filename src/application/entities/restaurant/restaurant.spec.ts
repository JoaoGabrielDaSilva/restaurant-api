import { faker } from '@faker-js/faker';
import { randomUUID } from 'crypto';
import { Restaurant } from './restaurant';

describe('Restaurant', () => {
  it('should be able to create a restaurant', async () => {
    const sut = new Restaurant({
      name: faker.company.name(),
      userId: randomUUID(),
    });

    expect(sut).toBeTruthy();
  });
});
