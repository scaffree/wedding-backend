import { Controller, Post, Body, Get } from '@nestjs/common';
import { FoodDto } from './dto/food.dto';
import { FoodService } from './food.service';

@Controller('food')
export class FoodController {
    constructor(
        private foodService: FoodService
    ) { }

    @Get()
    getAllFood() {
        return this.foodService.getAllFood()
    }

    @Post()
    createFood(@Body() newFood: FoodDto) {
        return this.foodService.createFood(newFood)
    }

}
