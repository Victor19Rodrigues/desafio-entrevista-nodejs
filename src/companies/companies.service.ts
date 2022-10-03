import { Injectable, NotFoundException } from '@nestjs/common';
import { CompaniesRepository } from './companies.repository';
import { Company } from './company.entity';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompaniesService {
  constructor(private companiesRepository: CompaniesRepository) {}

  async getAllCompanies(): Promise<Company[]> {
    return await this.companiesRepository.find();
  }

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

  async deleteCompany(id: string): Promise<void> {
    const result = await this.companiesRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Company with ID "${id}" not found`);
    }
  }

  async updateCompany(
    id: string,
    companyData: UpdateCompanyDto,
  ): Promise<Company> {
    const company = await this.getCompanyById(id);

    this.companiesRepository.merge(company, companyData);

    await this.companiesRepository.save(company);

    return company;
  }
}
