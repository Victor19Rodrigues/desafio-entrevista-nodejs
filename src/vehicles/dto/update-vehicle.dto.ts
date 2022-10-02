import { IsIn, IsNotEmpty } from 'class-validator';

export class UpdateVehicleDto {
  @IsNotEmpty()
  make: string;

  @IsNotEmpty()
  model: string;

  @IsNotEmpty()
  color: string;

  @IsNotEmpty()
  @IsIn(['CAR', 'MOTORCYCLE'])
  type: VehicleType;
}

export enum VehicleType {
  CAR = 'CAR',
  MOTORCYCLE = 'MOTORCYCLE',
}
