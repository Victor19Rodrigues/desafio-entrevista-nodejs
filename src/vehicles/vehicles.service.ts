import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { Vehicle } from './vehicle.entity';
import { VehiclesRepository } from './vehicles.repository';

@Injectable()
export class VehiclesService {
  constructor(private readonly vehiclesRepository: VehiclesRepository) {}

  createVehicle(vehicleData: CreateVehicleDto): Promise<Vehicle> {
    return this.vehiclesRepository.createVehicle(vehicleData);
  }

  async getAllVehicles(): Promise<Vehicle[]> {
    return await this.vehiclesRepository.find();
  }

  async getVehicleById(id: string): Promise<Vehicle> {
    const vehicle = await this.vehiclesRepository.findOneBy({ id });

    if (!vehicle) {
      throw new NotFoundException(`Vehicle with ID "${id}" not found`);
    }

    return vehicle;
  }

  async updateVehicle(
    id: string,
    vehicleData: UpdateVehicleDto,
  ): Promise<Vehicle> {
    const vehicle = await this.getVehicleById(id);

    this.vehiclesRepository.merge(vehicle, vehicleData);

    await this.vehiclesRepository.save(vehicle);

    return vehicle;
  }

  async deleteVehicle(id: string): Promise<void> {
    const result = await this.vehiclesRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Vehicle with ID "${id}" not found`);
    }
  }
}
