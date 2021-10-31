import {Column, Entity} from 'typeorm';

import {Base} from '../base.model';

@Entity()
export class User extends Base {
  @Column({unique: true})
  userName!: string;

  @Column()
  password!: string;
}
