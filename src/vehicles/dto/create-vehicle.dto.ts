import { IsIn, IsNotEmpty } from 'class-validator';

export class CreateVehicleDto {
  @IsNotEmpty()
  make: string;

  @IsNotEmpty()
  model: string;

  @IsNotEmpty()
  color: string;

  @IsNotEmpty()
  numberPlate: string;

  @IsNotEmpty()
  @IsIn(['CAR', 'MOTORCYCLE'])
  type: VehicleType;
}

export enum VehicleType {
  CAR = 'CAR',
  MOTORCYCLE = 'MOTORCYCLE',
}
