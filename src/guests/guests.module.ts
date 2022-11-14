import { Module } from '@nestjs/common';
import { Guest } from 'src/entities/Guests.entity';
import { GuestsController } from './guests.controller';
import { GuestsService } from './guests.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Guest])],
    providers: [GuestsService],
    controllers: [GuestsController]
})

export class GuestsModule { }
