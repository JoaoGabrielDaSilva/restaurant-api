import { Table } from '@application/entities/table/table';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class RegisterRestaurantsBody {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsUUID()
  userId: string;

  tables?: Table[];
}
