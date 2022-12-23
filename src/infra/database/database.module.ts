import { RestaurantsRepository } from '@application/repositories/restaurants-repository';
import { TablesRepository } from '@application/repositories/tables-repository';
import { UsersRepository } from '@application/repositories/users-repository';
import { Module } from '@nestjs/common/decorators/modules/module.decorator';
import { PrismaService } from './prisma/prisma.service';
import { PrismaRestaurantsRepository } from './prisma/repositories/prisma-restaurants-repository';
import { PrismaTablesRepository } from './prisma/repositories/prisma-tables-repository';
import { PrismaUsersRepository } from './prisma/repositories/prisma-users-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: UsersRepository,
      useClass: PrismaUsersRepository,
    },
    {
      provide: RestaurantsRepository,
      useClass: PrismaRestaurantsRepository,
    },
    {
      provide: TablesRepository,
      useClass: PrismaTablesRepository,
    },
  ],
  exports: [UsersRepository, RestaurantsRepository, TablesRepository],
})
export class DatabaseModule {}
