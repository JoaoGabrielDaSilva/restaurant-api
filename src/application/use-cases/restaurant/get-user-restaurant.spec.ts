import { Restaurant } from '@application/entities/restaurant/restaurant';
import { faker } from '@faker-js/faker';
import { InMemoryRestaurantsRepository } from '@test/repositories/in-memory-restaurants-repository';
import { randomUUID } from 'crypto';
import { GetUserRestaurants } from './get-user-restaurants';

const makeRestaurant = (props?: Partial<Restaurant>): Restaurant =>
  new Restaurant({
    name: faker.company.name(),
    userId: randomUUID(),
    ...props,
  });

describe('Get user restaurants', () => {
  it('should be able to get all user restaurants', async () => {
    const restaurantsRepository = new InMemoryRestaurantsRepository();

    const userId = randomUUID();

    const mockRestaurants = [
      makeRestaurant({ userId }),
      makeRestaurant({ userId }),
      makeRestaurant(),
    ];
    restaurantsRepository.restaurants = mockRestaurants;

    const registerRestaurant = new GetUserRestaurants(restaurantsRepository);

    const { restaurants } = await registerRestaurant.execute({
      userId,
    });

    expect(restaurants).toBeTruthy();
    expect(restaurants.length).toBe(2);
  });
});
