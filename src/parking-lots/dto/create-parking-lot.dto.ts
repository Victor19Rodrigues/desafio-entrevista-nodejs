import { IsInt, IsNotEmpty, IsOptional, Matches } from 'class-validator';

export class CreateParkingLotDto {
  @IsNotEmpty({ message: 'O campo vehicleId não pode ser vazio' })
  vehicleId: string;

  @IsNotEmpty({ message: 'O campo companyId não pode ser vazio' })
  companyId: string;

  @IsNotEmpty()
  @Matches(
    /^([1-9]|([012][0-9])|(3[01]))\/([0]{0,1}[1-9]|1[012])\/\d\d\d\d (20|21|22|23|[0-1]?\d):[0-5]?\d:[0-5]?\d$/,
    {
      message: `A data não corresponde ao formato 'dd/mm/aaaa hh:mm:ss' válido`,
    },
  )
  entryTime: string;

  @IsOptional()
  @Matches(
    /^([1-9]|([012][0-9])|(3[01]))\/([0]{0,1}[1-9]|1[012])\/\d\d\d\d (20|21|22|23|[0-1]?\d):[0-5]?\d:[0-5]?\d$/,
    {
      message: `A data não corresponde ao formato 'dd/mm/aaaa hh:mm:ss' válido`,
    },
  )
  exitTime: string;
}
