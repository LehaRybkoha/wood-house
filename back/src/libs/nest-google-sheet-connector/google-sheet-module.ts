import { DynamicModule, Module } from '@nestjs/common';
import AsyncGoogleSheetConnectorDto from './dto/async.google-sheet-connector.dto';
import GoogleSheetConnectorDto from './dto/google-sheet-connector.dto';
import { GoogleAuthService } from './google-auth-service';
import { GoogleSheetConnectorService } from './google-sheet-connector.service';

@Module({})
export class GoogleSheetModule {
  static register(options: GoogleSheetConnectorDto): DynamicModule {
    return {
      module: GoogleSheetModule,
      providers: [
        {
          provide: 'GOOGLE_SHEET_CONNECTOR',
          useValue: options,
        },
        GoogleSheetConnectorService,
        GoogleAuthService,
      ],
      imports: [],
      exports: [GoogleSheetConnectorService, GoogleAuthService],
    };
  }
  static registerAsync(options: AsyncGoogleSheetConnectorDto): DynamicModule {
    return {
      module: GoogleSheetModule,
      imports: options.imports,
      providers: [
        {
          provide: 'GOOGLE_SHEET_CONNECTOR',
          useFactory: options.useFactory,
          inject: options.inject,
        },
        GoogleSheetConnectorService,
        GoogleAuthService,
      ],
      exports: [GoogleSheetConnectorService, GoogleAuthService],
    };
  }
}
