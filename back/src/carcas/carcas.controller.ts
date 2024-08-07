import { Controller, Get, Param } from '@nestjs/common';
import { Carcas, CarcasService } from './carcas.service';

@Controller('api/carcas')
export class CarcasController {
  constructor(private readonly carcasService: CarcasService) {}

  @Get()
  getList(): Carcas[] {
    return this.carcasService.getList();
  }

  @Get(':id')
  getHouse(@Param('id') id: string): Carcas {
    return this.carcasService.getCarcas(id);
  }
}
