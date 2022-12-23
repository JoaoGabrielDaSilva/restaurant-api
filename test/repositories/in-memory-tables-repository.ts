import { Table } from '@application/entities/table/table';
import { TablesRepository } from '@application/repositories/tables-repository';

export class InMemoryTablesRepository implements TablesRepository {
  private tables: Table[] = [];

  async create(table: Table): Promise<void> {
    this.tables.push(table);
  }

  async findAllByRestaurantId(restaurantId: string): Promise<Table[]> {
    return this.tables.filter((table) => table.restaurantId === restaurantId);
  }
}
