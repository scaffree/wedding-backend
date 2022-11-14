import { Module } from '@nestjs/common';
import { Food } from 'src/entities/Food.entity';
import { FoodController } from './food.controller';
import { FoodService } from './food.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Food])],
  controllers: [FoodController],
  providers: [FoodService]
})

export class FoodModule { }
