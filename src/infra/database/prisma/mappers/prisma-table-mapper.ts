import { Table } from '@application/entities/table/table';
import { Table as RawTable } from '@prisma/client';

export class PrismaTableMapper {
  static toPrisma(table: Table) {
    return {
      id: table.id,
      number: table.number,
    };
  }

  static toDomain(raw: RawTable): Table {
    return new Table(
      { number: raw.number, restaurantId: raw.restaurantId },
      raw.id,
    );
  }
}
