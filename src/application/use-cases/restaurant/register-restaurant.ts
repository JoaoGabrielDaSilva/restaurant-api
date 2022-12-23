import { Restaurant } from '@application/entities/restaurant/restaurant';
import { Table } from '@application/entities/table/table';
import { RestaurantsRepository } from '@application/repositories/restaurants-repository';
import { Injectable } from '@nestjs/common';

interface RegisterRestaurantRequest {
  name: string;
  userId: string;
  tables?: {
    number: string
  }[];
}

interface RegisterRestaurantResponse {
  restaurant: Restaurant;
}

@Injectable()
export class RegisterRestaurant {
  constructor(private restaurantsRepository: RestaurantsRepository) {}

  async execute(
    request: RegisterRestaurantRequest,
  ): Promise<RegisterRestaurantResponse> {
    const { name, userId, tables } = request;

    const restaurant = new Restaurant({
      name,
      userId,
    });

    restaurant.tables = tables.map(
      (table) =>
        new Table({ number: table.number, restaurantId: restaurant.id }),
    );

    await this.restaurantsRepository.create(restaurant);

    return {
      restaurant,
    };
  }
}
