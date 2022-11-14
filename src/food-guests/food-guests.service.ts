import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FoodGuest } from 'src/entities/FoodGuest.entity';
import { Repository } from 'typeorm';
import { FoodGuestDto } from './dto/foodguest.dto';

@Injectable()
export class FoodGuestsService {

    constructor(
        @InjectRepository(FoodGuest) private foodGuestRepository: Repository<FoodGuest>
    ) { }

    getAllFoodGuests(): Promise<FoodGuest[]> {
        return this.foodGuestRepository.find()
    }

    createFoodGuest(foodGuestObject: FoodGuestDto): Promise<FoodGuest> {
        const newEntry = this.foodGuestRepository.create(foodGuestObject)
        return this.foodGuestRepository.save(newEntry)
    }

}
