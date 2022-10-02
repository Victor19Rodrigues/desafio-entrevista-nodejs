export interface Vehicle {
  id: string;
  make: string;
  model: string;
  color: string;
  numberPlate: string;
  type: VehicleType;
  createdAt: Date;
  updatedAt: Date;
}

export enum VehicleType {
  CAR = 'CAR',
  MOTORCYCLE = 'MOTORCYCLE',
}
