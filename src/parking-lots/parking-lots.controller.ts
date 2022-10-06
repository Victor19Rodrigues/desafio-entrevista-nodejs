import { Body, Controller, Post } from '@nestjs/common';
import { CreateParkingLotDto } from './dto/create-parking-lot.dto';
import { ParkingLotsService } from './parking-lots.service';

@Controller('parking-lots')
export class ParkingLotsController {
  constructor(private readonly parkingLotsService: ParkingLotsService) {}

  @Post()
  createParkingLot(@Body() parkingLotData: CreateParkingLotDto) {
    return this.parkingLotsService.createParkingLot(parkingLotData);
  }
}
