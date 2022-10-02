import { Body, Controller, Get, Post } from '@nestjs/common';
import { Company } from './companies.model';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company.dto';

@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Get()
  getAllCompanies(): Company[] {
    return this.companiesService.getAllCompanies();
  }

  @Post()
  createCompany(@Body() companyData: CreateCompanyDto): Company {
    return this.companiesService.createCompany(companyData);
  }
}
