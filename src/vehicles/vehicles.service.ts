import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { Vehicle } from './vehicles.model';
import { v4 as uuid } from 'uuid';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';

@Injectable()
export class VehiclesService {
  private vehicles: Vehicle[] = [];

  createVehicle(vehicleData: CreateVehicleDto): Vehicle {
    const { make, model, color, numberPlate, type } = vehicleData;

    const vehicle: Vehicle = {
      id: uuid(),
      make,
      model,
      color,
      numberPlate,
      type,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.vehicles.push(vehicle);

    return vehicle;
  }

  getAllVehicles(): Vehicle[] {
    return this.vehicles;
  }

  getVehicleById(id: string): Vehicle {
    const vehicle = this.vehicles.find((vehicle) => vehicle.id === id);

    if (!vehicle) {
      throw new NotFoundException(`Vehicle with ID "${id}" not found`);
    }

    return vehicle;
  }

  updateVehicle(id: string, vehicleData: UpdateVehicleDto): Vehicle {
    const vehicle = this.getVehicleById(id);

    Object.assign(vehicle, vehicleData);

    return vehicle;
  }

  deleteVehicle(id: string): void {
    const vehicleFounded = this.getVehicleById(id);

    this.vehicles = this.vehicles.filter(
      (company) => company.id !== vehicleFounded.id,
    );
  }
}
