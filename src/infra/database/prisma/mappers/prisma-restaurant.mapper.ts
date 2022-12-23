import { Restaurant } from '@application/entities/restaurant/restaurant';
import { Prisma, Restaurant as RawRestaurant } from '@prisma/client';
import { PrismaTableMapper } from './prisma-table-mapper';

interface RestaurantWithTables extends RawRestaurant {
  tables: Prisma.TableCreateWithoutRestaurantInput[];
}

export class PrismaRestaurantsMapper {
  static toPrisma(restaurant: Restaurant): RestaurantWithTables {
    return {
      id: restaurant.id,
      name: restaurant.name,
      userId: restaurant.userId,
      tables: restaurant.tables.map((table) => ({
        id: table.id,
        number: table.number,
      })),
    };
  }

  static toDomain(raw: RestaurantWithTables): Restaurant {
    return new Restaurant(
      {
        name: raw.name,
        userId: raw.userId,
        tables: raw.tables.map(PrismaTableMapper.toDomain),
      },
      raw.id,
    );
  }
}
