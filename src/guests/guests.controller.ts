import { Controller, Post, Body, Get } from '@nestjs/common'; import { GuestDto } from './dto/guest.dto';
import { GuestsService } from './guests.service';

@Controller('guests')
export class GuestsController {

    constructor(
        private guestService: GuestsService
    ) { }

    @Get()
    getAllGuests() {
        return this.guestService.getAllGuests()
    }

    @Post()
    createGuest(@Body() newGuest: GuestDto) {
        return this.guestService.createGuest(newGuest)
    }
}
