import { randomUUID } from 'node:crypto';

interface TableProps {
  number: string;
  restaurantId: string;
}

export class Table {
  private _id: string;
  private props: TableProps;

  constructor(props: TableProps, id: string = randomUUID()) {
    this._id = id;
    this.props = props;
  }

  public get id(): string {
    return this._id;
  }
  public get number(): string {
    return this.props.number;
  }
  public set number(number: string) {
    this.props.number = number;
  }
  public get restaurantId(): string {
    return this.props.restaurantId;
  }
  public set restaurantId(restaurantId: string) {
    this.props.restaurantId = restaurantId;
  }
}
