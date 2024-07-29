import { Controller, Get } from '@nestjs/common';
import { House, HousesService } from './houses.service';

@Controller('houses')
export class HousesController {
  constructor(private readonly housesService: HousesService) {}

  @Get()
  getList(): House[] {
    return this.housesService.getList();
  }

  @Get(':id')
  getBath(): string {
    return this.housesService.getBath();
  }
}
