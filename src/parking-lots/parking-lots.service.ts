import { Injectable } from '@nestjs/common';
import { format, parse } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { CreateParkingLotDto } from './dto/create-parking-lot.dto';
import { ParkingLotsRepository } from './parking-lots.repository';

@Injectable()
export class ParkingLotsService {
  constructor(private readonly parkingLotsRepository: ParkingLotsRepository) {}

  async createParkingLot(parkingLotData: CreateParkingLotDto) {
    const response = this.formatDate(parkingLotData);

    const parkingLot = this.parkingLotsRepository.create(response);

    await this.parkingLotsRepository.save(parkingLot);

    return parkingLot;
  }

  private formatDate(parkingLot: CreateParkingLotDto) {
    const date = parse(
      parkingLot.entryTime,
      'dd/MM/yyyy HH:mm:ss',
      new Date(),
      {
        locale: ptBR,
      },
    );

    const formatedDate = format(date, 'yyyy-MM-dd HH:mm:ss', { locale: ptBR });

    return { ...parkingLot, entryTime: formatedDate };
  }
}
