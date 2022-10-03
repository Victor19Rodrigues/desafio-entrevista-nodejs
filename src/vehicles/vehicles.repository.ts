import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Vehicle } from './vehicle.entity';
import { CreateVehicleDto } from './dto/create-vehicle.dto';

@Injectable()
export class VehiclesRepository extends Repository<Vehicle> {
  constructor(private readonly dataSource: DataSource) {
    super(Vehicle, dataSource.createEntityManager());
  }

  async createVehicle(vehicleData: CreateVehicleDto): Promise<Vehicle> {
    const vehicle = this.create(vehicleData);

    await this.save(vehicle);

    return vehicle;
  }
}
