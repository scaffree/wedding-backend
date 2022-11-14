import { Controller, Get, Post, Body } from '@nestjs/common';
import { FoodGuestDto } from './dto/foodguest.dto';
import { FoodGuestsService } from './food-guests.service';

@Controller('food-guests')
export class FoodGuestsController {

    constructor(private foodGuestService: FoodGuestsService) { }

    @Get()
    getAllFoodGuests() {
        return this.foodGuestService.getAllFoodGuests()
    }

    @Post()
    createNewFoodGuest(@Body() newFoodGuest: FoodGuestDto) {
        return this.foodGuestService.createFoodGuest(newFoodGuest)
    }
}
