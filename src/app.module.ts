import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuestsService } from './guests/guests.service';
import { GuestsController } from './guests/guests.controller';
import { GuestsModule } from './guests/guests.module';
import { FoodModule } from './food/food.module';
import { Guest } from './entities/Guests.entity';
import { Food } from './entities/Food.entity';
import { FoodGuest } from './entities/FoodGuest.entity';
import { FoodController } from './food/food.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FoodGuestsService } from './food-guests/food-guests.service';
import { FoodGuestsModule } from './food-guests/food-guests.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'wedding_db',
      entities: [Guest, Food, FoodGuest],
      synchronize: true,
    }),
    FoodModule,
    GuestsModule,
    FoodGuestsModule
  ],
  controllers: [AppController],
  providers: [AppService]
})

export class AppModule {

}
