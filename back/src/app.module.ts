import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BathsModule } from './baths/baths.module';
import { HousesModule } from './houses/houses.module';

import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { CarcasModule } from './carcas/carcas.module';
import { SubmitModule } from './submit/submit.module';

@Module({
  imports: [
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 10,
      },
    ]),
    ConfigModule.forRoot(),
    BathsModule,
    HousesModule,
    SubmitModule,
    CarcasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
