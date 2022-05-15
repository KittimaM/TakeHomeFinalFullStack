import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Flight {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column()
  from: string;

  @Column()
  to: string;

  @Column('date', { nullable: false })
  departure: Date;

  @Column('date', { nullable: false })
  arrival: Date;

  @Column()
  adult: number;

  @Column()
  children: number;

  @Column()
  infants: number;
}
