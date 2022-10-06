import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompaniesModule } from './companies/companies.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { AuthModule } from './auth/auth.module';
import { ParkingLotsModule } from './parking-lots/parking-lots.module';

@Module({
  imports: [
    CompaniesModule,
    VehiclesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'park_db',
      synchronize: true,
      autoLoadEntities: true,
    }),
    AuthModule,
    ParkingLotsModule,
  ],
})
export class AppModule {}
