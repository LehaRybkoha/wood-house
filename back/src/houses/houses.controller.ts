import { Controller, Get, Param } from '@nestjs/common';
import { House, HousesService } from './houses.service';

@Controller('houses')
export class HousesController {
  constructor(private readonly housesService: HousesService) {}

  @Get()
  getList(): House[] {
    return this.housesService.getList();
  }

  @Get(':id')
  getHouse(@Param('id') id: string): House {
    return this.housesService.getHouse(id);
  }
}
