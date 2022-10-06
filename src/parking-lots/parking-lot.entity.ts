import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToOne,
  JoinColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Company } from '../companies/company.entity';
import { Vehicle } from 'src/vehicles/vehicle.entity';

@Entity()
export class ParkingLot {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  vehicleId: string;

  @Column()
  companyId: string;

  @OneToOne(() => Vehicle, {
    eager: true,
  })
  @JoinColumn()
  vehicle: Vehicle;

  @OneToOne(() => Company, {
    eager: true,
  })
  @JoinColumn()
  company: Company;

  @Column({ nullable: true })
  exitTime: Date;

  @Column()
  entryTime: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
