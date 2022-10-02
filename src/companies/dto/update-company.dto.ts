import { IsInt, IsNotEmpty } from 'class-validator';

export class UpdateCompanyDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  phone: string;

  @IsNotEmpty()
  @IsInt()
  qtdSpotsForCars: number;

  @IsNotEmpty()
  @IsInt()
  qtdSpotsForMotorcycles: number;
}
