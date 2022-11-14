import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Guest } from 'src/entities/Guests.entity';
import { Repository } from 'typeorm';
import { GuestDto } from './dto/guest.dto';

@Injectable()
export class GuestsService {

    constructor(
        @InjectRepository(Guest)
        private guestRepository: Repository<Guest>
    ) { }


    getAllGuests(): Promise<Guest[]> {
        return this.guestRepository.find()
    }

    createGuest(guestObject: GuestDto) {
        const newGuest = this.guestRepository.create(guestObject)
        return this.guestRepository.save(newGuest)
    }
}
