import { Controller, Get, Param } from '@nestjs/common';
import { Bath, BathsService } from './baths.service';

@Controller('api/baths')
export class BathsController {
  constructor(private readonly bathsService: BathsService) {}

  @Get()
  getList(): Bath[] {
    return this.bathsService.getList();
  }

  @Get(':id')
  getBath(@Param('id') id: string): Bath {
    return this.bathsService.getBath(id);
  }
}
