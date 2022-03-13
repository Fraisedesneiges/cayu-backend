import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  userId?: number;

  @Column()
  username: string;

  @Column()
  mail: string;

  @Column()
  password: string;
}
