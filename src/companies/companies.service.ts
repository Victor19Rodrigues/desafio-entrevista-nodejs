import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CompaniesRepository } from './companies.repository';
import { Company } from './company.entity';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompaniesService {
  constructor(private companiesRepository: CompaniesRepository) {}

  // getAllCompanies(): Company[] {
  //   return this.companies;
  // }

  async getCompanyById(id: string): Promise<Company> {
    const company = await this.companiesRepository.findOneBy({ id });

    if (!company) {
      throw new NotFoundException(`Company with ID "${id}" not found`);
    }

    return company;
  }

  createCompany(companyData: CreateCompanyDto): Promise<Company> {
    return this.companiesRepository.createCompany(companyData);
  }

  // getCompanyById(id: string): Company {
  //   const company = this.companies.find((company) => company.id === id);
  //   if (!company) {
  //     throw new NotFoundException(`Company with ID "${id}" not found`);
  //   }
  //   return company;
  // }

  // deleteCompany(id: string): void {
  //   const companyFounded = this.getCompanyById(id);
  //   this.companies = this.companies.filter(
  //     (company) => company.id !== companyFounded.id,
  //   );
  // }
  // updateCompany(id: string, companyData: UpdateCompanyDto): Company {
  //   const company = this.getCompanyById(id);
  //   Object.assign(company, companyData);
  //   return company;
  // }
}
