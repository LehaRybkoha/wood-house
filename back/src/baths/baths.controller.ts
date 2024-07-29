import { Controller, Get } from '@nestjs/common';
import { Bath, BathsService } from './baths.service';

@Controller('baths')
export class BathsController {
  constructor(private readonly bathsService: BathsService) {}

  @Get()
  getList(): Bath[] {
    return this.bathsService.getList();
  }

  @Get(':id')
  getBath(): string {
    return this.bathsService.getBath();
  }
}
