import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { VehiclesService } from './vehicles.service';

@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  // @Post()
  // createVehicle(@Body() vehicleData: CreateVehicleDto): Vehicle {
  //   return this.vehiclesService.createVehicle(vehicleData);
  // }

  // @Get()
  // getAllVehicles(): Vehicle[] {
  //   return this.vehiclesService.getAllVehicles();
  // }

  // @Get(':id')
  // getVehicleById(@Param('id') id: string): Vehicle {
  //   return this.vehiclesService.getVehicleById(id);
  // }

  // @Put(':id')
  // updateVehicle(
  //   @Param('id') id: string,
  //   @Body() vehicleData: UpdateVehicleDto,
  // ): Vehicle {
  //   return this.vehiclesService.updateVehicle(id, vehicleData);
  // }

  // @Delete(':id')
  // deleteVehicle(@Param('id') id: string): void {
  //   return this.vehiclesService.deleteVehicle(id);
  // }
}
