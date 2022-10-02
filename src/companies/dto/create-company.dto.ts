import { IsInt, IsNotEmpty, Length } from 'class-validator';

export class CreateCompanyDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @Length(14)
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
