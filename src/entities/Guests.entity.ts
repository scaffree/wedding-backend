import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Guest {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    lastname: string;
}