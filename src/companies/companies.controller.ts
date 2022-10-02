import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
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

  @Get('/:id')
  getCompanyById(@Param('id') id: string): Company {
    return this.companiesService.getCompanyById(id);
  }

  @Post()
  createCompany(@Body() companyData: CreateCompanyDto): Company {
    return this.companiesService.createCompany(companyData);
  }

  @Delete('/:id')
  deleteCompany(@Param('id') id: string): void {
    return this.companiesService.deleteCompany(id);
  }
}
