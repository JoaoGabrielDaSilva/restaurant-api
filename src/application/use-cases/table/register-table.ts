import { Table } from '@application/entities/table/table';
import { TablesRepository } from '@application/repositories/tables-repository';
import { Injectable } from '@nestjs/common';

interface RegisterTableRequest {
  number: string;
  restaurantId: string;
}

interface RegisterTableResponse {
  table: Table;
}

@Injectable()
export class RegisterTable {
  constructor(private tablesRepository: TablesRepository) {}

  async execute(request: RegisterTableRequest): Promise<RegisterTableResponse> {
    const table = new Table({
      number: request.number,
      restaurantId: request.restaurantId,
    });

    await this.tablesRepository.create(table);

    return { table };
  }
}
