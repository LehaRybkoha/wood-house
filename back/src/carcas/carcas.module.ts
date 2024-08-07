import { Module } from '@nestjs/common';
import { CarcasController } from './carcas.controller';
import { CarcasService } from './carcas.service';

@Module({
  imports: [],
  controllers: [CarcasController],
  providers: [CarcasService],
})
export class CarcasModule {}
