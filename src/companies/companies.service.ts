import { Injectable } from '@nestjs/common';
import { Company } from './companies.model';
import { v4 as uuid } from 'uuid';
import { CreateCompanyDto } from './dto/create-company.dto';

@Injectable()
export class CompaniesService {
  private companies: Company[] = [];

  getAllCompanies(): Company[] {
    return this.companies;
  }

  getCompanyById(id: string): Company {
    return this.companies.find((company) => company.id === id);
  }

  createCompany(companyData: CreateCompanyDto): Company {
    const {
      name,
      cnpj,
      address,
      phone,
      qtdSpotsForCars,
      qtdSpotsForMotorcycles,
    } = companyData;

    const company: Company = {
      id: uuid(),
      name,
      cnpj,
      address,
      phone,
      qtdSpotsForCars,
      qtdSpotsForMotorcycles,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.companies.push(company);

    return company;
  }
}
