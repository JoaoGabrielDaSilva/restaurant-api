import { Restaurant } from '@application/entities/restaurant/restaurant';
import { RestaurantsRepository } from '@application/repositories/restaurants-repository';
import { Injectable } from '@nestjs/common/decorators';
import { PrismaRestaurantsMapper } from '../mappers/prisma-restaurant.mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaRestaurantsRepository implements RestaurantsRepository {
  constructor(private prisma: PrismaService) {}

  public async create(restaurant: Restaurant): Promise<void> {
    const raw = PrismaRestaurantsMapper.toPrisma(restaurant);

    await this.prisma.restaurant.create({
      data: {
        ...raw,
        tables: { create: raw.tables },
      },
      include: { tables: true },
    });
  }

  public async findAllByUserId(userId: string): Promise<Restaurant[]> {
    const restaurants = await this.prisma.restaurant.findMany({
      where: { userId },
      include: { tables: true },
    });

    return restaurants.map(PrismaRestaurantsMapper.toDomain);
  }
}
