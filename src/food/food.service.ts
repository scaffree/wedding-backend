import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Food } from 'src/entities/Food.entity';
import { Repository } from 'typeorm';
import { FoodDto } from './dto/food.dto';

@Injectable()
export class FoodService {
    constructor(
        @InjectRepository(Food) private foodRepository: Repository<Food>
    ) { }

    getAllFood(): Promise<Food[]> {
        return this.foodRepository.find()
    }

    createFood(dataFood: FoodDto): Promise<Food> {
        const newUser = this.foodRepository.create(dataFood)
        return this.foodRepository.save(newUser)
    }
}
