import { Restaurant } from '@application/entities/restaurant/restaurant';

export class RestaurantViewModel {
  static toHTTP(restaurant: Restaurant) {
    return {
      name: restaurant.name,
      userId: restaurant.userId,
      tables: restaurant.tables.map((table) => ({
        id: table.id,
        number: table.number,
      })),
    };
  }
}
