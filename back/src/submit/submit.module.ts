import { Module } from '@nestjs/common';
import dotenv from 'dotenv';
import { GoogleSheetModule } from 'src/libs/nest-google-sheet-connector';
import { SubmitController } from './submit.controller';

dotenv.config();

const config = {
  type: process.env.type,
  project_id: process.env.project_id,
  private_key_id: process.env.private_key_id,
  private_key: process.env.private_key.split(String.raw`\n`).join('\n'),
  client_email: process.env.client_email,
  client_id: process.env.client_id,
  auth_uri: process.env.auth_uri,
  token_uri: process.env.token_uri,
  auth_provider_x509_cert_url: process.env.auth_provider_x509_cert_url,
  client_x509_cert_url: process.env.client_x509_cert_url,
};

@Module({
  imports: [GoogleSheetModule.register(config)],
  controllers: [SubmitController],
  providers: [],
})
export class SubmitModule {}
