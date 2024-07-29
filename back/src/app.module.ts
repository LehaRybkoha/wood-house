import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BathsModule } from './baths/baths.module';
import { HousesModule } from './houses/houses.module';

@Module({
  imports: [BathsModule, HousesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
