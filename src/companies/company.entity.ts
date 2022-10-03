import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Company {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  cnpj: string;

  @Column()
  address: string;

  @Column()
  phone: string;

  @Column({ name: 'qtd_spots_for_motorcycles' })
  qtdSpotsForMotorcycles: number;

  @Column({ name: 'qtd_spots_for_cars' })
  qtdSpotsForCars: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
