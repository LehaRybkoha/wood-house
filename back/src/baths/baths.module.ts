import { Module } from '@nestjs/common';
import { BathsController } from './baths.controller';
import { BathsService } from './baths.service';

@Module({
  imports: [],
  controllers: [BathsController],
  providers: [BathsService],
})
export class BathsModule {}
