import { Table } from '@application/entities/table/table';
import { TablesRepository } from '@application/repositories/tables-repository';
import { UsersRepository } from '@application/repositories/users-repository';
import { Injectable } from '@nestjs/common';
import { PrismaTableMapper } from '../mappers/prisma-table-mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaTablesRepository implements TablesRepository {
  constructor(private prisma: PrismaService) {}

  async create(table: Table): Promise<void> {
    const raw = PrismaTableMapper.toPrisma(table);
    // await this.prisma.table.create({ data: raw });
  }
  async findAllByRestaurantId(restaurantId: string): Promise<Table[]> {
    const tables = await this.prisma.table.findMany({
      where: { restaurantId },
    });
    return tables.map(PrismaTableMapper.toDomain);
  }
}
