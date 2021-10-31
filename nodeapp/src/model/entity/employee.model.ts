import {Column, DeleteDateColumn, Entity} from 'typeorm';

import {Base} from '../base.model';

@Entity()
export class Employee extends Base {
  @Column()
  email!: string;

  @Column()
  employeeId!: string;

  @Column()
  name!: string;

  @Column()
  address!: string;

  @Column()
  age!: number;

  @Column()
  phone!: number;

  @DeleteDateColumn()
  status!: Date;
}
