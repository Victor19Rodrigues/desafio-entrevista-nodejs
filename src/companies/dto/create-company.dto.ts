import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateCompanyDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  cnpj: string;

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
