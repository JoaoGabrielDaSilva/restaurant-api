import { Restaurant } from '@application/entities/restaurant/restaurant';
import { RestaurantsRepository } from '@application/repositories/restaurants-repository';

export class InMemoryRestaurantsRepository implements RestaurantsRepository {
  public restaurants: Restaurant[] = [];

  async create(restaurant: Restaurant): Promise<void> {
    this.restaurants.push(restaurant);
  }

  public async findAllByUserId(userId: string): Promise<Restaurant[]> {
    return this.restaurants.filter(
      (restaurant) => restaurant.userId === userId,
    );
  }
}
