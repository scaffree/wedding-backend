import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Food } from './Food.entity';
import { Guest } from './Guests.entity';

@Entity()
export class FoodGuest {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    idFood: number

    @Column()
    idGuest: number
}