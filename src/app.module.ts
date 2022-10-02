import { Module } from '@nestjs/common';
import { CompaniesModule } from './companies/companies.module';
import { VehiclesModule } from './vehicles/vehicles.module';

@Module({
  imports: [CompaniesModule, VehiclesModule],
})
export class AppModule {}
