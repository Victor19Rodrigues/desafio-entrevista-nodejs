import { Injectable } from '@nestjs/common';
import { Company } from './companies.model';
import { v4 as uuid } from 'uuid';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

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

  deleteCompany(id: string): void {
    this.companies = this.companies.filter((company) => company.id !== id);
  }

  updateCompany(id: string, companyData: UpdateCompanyDto): Company {
    const company = this.getCompanyById(id);

    Object.assign(company, companyData);

    return company;
  }
}
