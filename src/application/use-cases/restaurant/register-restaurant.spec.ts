import { Table } from '@application/entities/table/table';
import { faker } from '@faker-js/faker';
import { InMemoryRestaurantsRepository } from '@test/repositories/in-memory-restaurants-repository';
import { randomUUID } from 'crypto';
import { RegisterRestaurant } from './register-restaurant';

describe('Register restaurant', () => {
  it('should be able to register a restaurant', async () => {
    const restaurantsRepository = new InMemoryRestaurantsRepository();
    const registerRestaurant = new RegisterRestaurant(restaurantsRepository);

    const { restaurant } = await registerRestaurant.execute({
      name: faker.company.name(),
      userId: randomUUID(),
      tables: [{ number: faker.random.numeric(2) }],
    });

    expect(restaurant).toBeTruthy();
  });
  it('should create restaurant tables with correct restaurant id', async () => {
    const restaurantsRepository = new InMemoryRestaurantsRepository();
    const registerRestaurant = new RegisterRestaurant(restaurantsRepository);

    const { restaurant } = await registerRestaurant.execute({
      name: faker.company.name(),
      userId: randomUUID(),
      tables: [
        { number: faker.random.numeric(2) },
        { number: faker.random.numeric(2) },
      ],
    });

    expect(restaurant).toBeTruthy();
    expect(restaurant.tables).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ restaurantId: restaurant.id }),
      ]),
    );
  });
});
