import { Replace } from '@application/helpers';
import { randomUUID } from 'node:crypto';
import { Email } from './email';

export interface UserProps {
  name: string;
  email: Email;
  role: string;
  createdAt?: Date;
  updatedAt?: Date | null;
  password: string;
}

export class User {
  private _id: string;
  private props: UserProps;

  constructor(props: Replace<UserProps, { createdAt?: Date }>, id?: string) {
    this._id = id || randomUUID();
    this.props = {
      ...props,
      createdAt: new Date(),
      updatedAt: props.updatedAt || null,
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

  public get password() {
    return this.props.password;
  }

  public get email(): Email {
    return this.props.email;
  }
  public set email(email: Email) {
    this.props.email = email;
  }
  public get createdAt(): Date {
    return this.props.createdAt;
  }
  public set createdAt(createdAt: Date) {
    this.props.createdAt = createdAt;
  }
  public get role(): string {
    return this.props.role;
  }

  public get updatedAt(): Date {
    return this.props.updatedAt;
  }
  public set updatedAt(updatedAt: Date) {
    this.props.updatedAt = updatedAt;
  }
}
