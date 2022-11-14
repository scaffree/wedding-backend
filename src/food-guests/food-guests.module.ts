import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodGuest } from 'src/entities/FoodGuest.entity';
import { FoodGuestsController } from './food-guests.controller';
import { FoodGuestsService } from './food-guests.service';

@Module({
  imports: [TypeOrmModule.forFeature([FoodGuest])],
  controllers: [FoodGuestsController],
  providers: [FoodGuestsService]
})

export class FoodGuestsModule { }
