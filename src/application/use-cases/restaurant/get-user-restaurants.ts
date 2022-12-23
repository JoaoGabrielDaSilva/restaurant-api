import { Restaurant } from '@application/entities/restaurant/restaurant';
import { RestaurantsRepository } from '@application/repositories/restaurants-repository';
import { Injectable } from '@nestjs/common';

interface GetUserRestaurantsRequest {
  userId: string;
}

interface GetUserRestaurantsResponse {
  restaurants: Restaurant[];
}

@Injectable()
export class GetUserRestaurants {
  constructor(private restaurantsRepository: RestaurantsRepository) {}

  async execute(
    request: GetUserRestaurantsRequest,
  ): Promise<GetUserRestaurantsResponse> {
    const { userId } = request;

    const restaurants = await this.restaurantsRepository.findAllByUserId(
      userId,
    );

    return {
      restaurants,
    };
  }
}
