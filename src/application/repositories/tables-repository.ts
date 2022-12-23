import { Table } from '@application/entities/table/table';

export abstract class TablesRepository {
  abstract create(table: Table): Promise<void>;

  abstract findAllByRestaurantId(restaurantId: string): Promise<Table[]>;
}
