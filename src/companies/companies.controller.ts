import { Controller, Get } from '@nestjs/common';
import { Company } from './companies.model';
import { CompaniesService } from './companies.service';

@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Get()
  getAllCompanies(): Company[] {
    return this.companiesService.getAllCompanies();
  }
}
