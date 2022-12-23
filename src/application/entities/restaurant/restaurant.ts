import { randomUUID } from 'node:crypto';
import { Table } from '../table/table';

interface RestaurantProps {
  name: string;
  userId: string;
  tables?: Table[];
}

export class Restaurant {
  private _id: string;
  private props: RestaurantProps;

  constructor(props: RestaurantProps, id: string = randomUUID()) {
    this._id = id;
    this.props = {
      ...props,
      tables: props.tables ?? [],
    };
  }

  public get id(): string {
    return this._id;
  }
  public get name(): string {
    return this.props.name;
  }
  public set name(name: string) {
    this.props.name = name;
  }
  public get userId(): string {
    return this.props.userId;
  }

  public get tables(): Table[] {
    return this.props.tables;
  }
  public set tables(tables: Table[]) {
    this.props.tables = tables;
  }
}
