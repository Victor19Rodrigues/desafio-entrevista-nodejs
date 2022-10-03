import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Company } from './company.entity';
import { CreateCompanyDto } from './dto/create-company.dto';

@Injectable()
export class CompaniesRepository extends Repository<Company> {
  constructor(private readonly dataSource: DataSource) {
    super(Company, dataSource.createEntityManager());
  }

  async createCompany(companyData: CreateCompanyDto): Promise<Company> {
    const company = this.create(companyData);

    await this.save(company);

    return company;
  }
}
