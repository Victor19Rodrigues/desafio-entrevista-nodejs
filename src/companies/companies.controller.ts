import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { Company } from './company.entity';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  // @Get()
  // getAllCompanies(): Company[] {
  //   return this.companiesService.getAllCompanies();
  // }

  @Get(':id')
  async getCompanyById(@Param('id') id: string): Promise<Company> {
    return await this.companiesService.getCompanyById(id);
  }

  @Post()
  async createCompany(@Body() companyData: CreateCompanyDto): Promise<Company> {
    return await this.companiesService.createCompany(companyData);
  }

  // @Delete(':id')
  // deleteCompany(@Param('id') id: string): void {
  //   return this.companiesService.deleteCompany(id);
  // }

  // @Put(':id')
  // updateCompany(
  //   @Param('id') id: string,
  //   @Body() companyData: UpdateCompanyDto,
  // ): Company {
  //   return this.companiesService.updateCompany(id, companyData);
  // }
}
