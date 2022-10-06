import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { ParkingLot } from './parking-lot.entity';

@Injectable()
export class ParkingLotsRepository extends Repository<ParkingLot> {
  constructor(private readonly dataSource: DataSource) {
    super(ParkingLot, dataSource.createEntityManager());
  }
}
