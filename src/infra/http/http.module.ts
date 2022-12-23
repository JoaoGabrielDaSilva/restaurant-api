import { SignInUser } from '@application/use-cases/auth/sign-in-user';
import { SignUpUser } from '@application/use-cases/auth/sign-up-user';
import { GetUserRestaurants } from '@application/use-cases/restaurant/get-user-restaurants';
import { RegisterRestaurant } from '@application/use-cases/restaurant/register-restaurant';
import { RegisterTable } from '@application/use-cases/table/register-table';
import { AuthModule } from '@infra/auth/auth.module';
import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth-controller';
import { RestaurantsController } from './controllers/restaurants-controller';

@Module({
  imports: [DatabaseModule, AuthModule],
  controllers: [AuthController, RestaurantsController],
  providers: [
    SignUpUser,
    SignInUser,
    RegisterRestaurant,
    GetUserRestaurants,
    RegisterTable,
  ],
})
export class HttpModule {}
