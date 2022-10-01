export interface Company {
  id: string;
  name: string;
  cnpj: string;
  address: string;
  phone: string;
  qtdSpotsForCars: number;
  qtdSpotsForMotorcycles: number;
  createdAt: Date;
  updatedAt: Date;
}
