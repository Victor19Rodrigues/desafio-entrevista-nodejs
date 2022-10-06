import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { ParkingLot } from './parking-lot.entity';
import { ParkingLotsController } from './parking-lots.controller';
import { ParkingLotsRepository } from './parking-lots.repository';
import { ParkingLotsService } from './parking-lots.service';

@Module({
  imports: [TypeOrmModule.forFeature([ParkingLot]), AuthModule],
  controllers: [ParkingLotsController],
  providers: [ParkingLotsService, ParkingLotsRepository],
})
export class ParkingLotsModule {}
