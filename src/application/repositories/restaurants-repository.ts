import { Restaurant } from '@application/entities/restaurant/restaurant';

export abstract class RestaurantsRepository {
  public abstract create(restaurant: Restaurant): Promise<void>;

  public abstract findAllByUserId(userId: string): Promise<Restaurant[]>;
}
