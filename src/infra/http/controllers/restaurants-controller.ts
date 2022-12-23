import { GetUserRestaurants } from '@application/use-cases/restaurant/get-user-restaurants';
import { RegisterRestaurant } from '@application/use-cases/restaurant/register-restaurant';
import { RegisterTable } from '@application/use-cases/table/register-table';
import { JwtGuard } from '@infra/auth/guards/jwt-guard';
import { PrismaTableMapper } from '@infra/database/prisma/mappers/prisma-table-mapper';
import { Controller, Post, Get, Body, Param, UseGuards } from '@nestjs/common';
import { RegisterRestaurantsBody } from '../dtos/restaurant/register-restaurant-body';
import { RestaurantViewModel } from '../view-models/restaurant-view-model';

@Controller('restaurants')
export class RestaurantsController {
  constructor(
    private registerRestaurant: RegisterRestaurant,
    private registerTable: RegisterTable,
    private getUserRestaurants: GetUserRestaurants,
  ) {}

  @Post()
  // @UseGuards(JwtGuard)
  async createRestaurant(@Body() body: RegisterRestaurantsBody) {
    const { name, userId, tables } = body;

    const { restaurant } = await this.registerRestaurant.execute({
      name,
      userId,
      tables,
    });

    return {
      restaurant: RestaurantViewModel.toHTTP(restaurant),
    };
  }
  @Get(':id')
  @UseGuards(JwtGuard)
  async listAll(@Param('id') userId: string) {
    const { restaurants } = await this.getUserRestaurants.execute({ userId });

    return {
      restaurants: restaurants.map(RestaurantViewModel.toHTTP),
    };
  }
}
