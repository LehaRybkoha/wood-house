import { Body, Controller, Post } from '@nestjs/common';
import { GoogleSheetConnectorService } from 'src/libs/nest-google-sheet-connector';

type SubmitBody = {
  name: string;
  phone: string;
  email: string;
  comment?: string;
};

@Controller('api/submit')
export class SubmitController {
  constructor(
    private googleSheetConnectorService: GoogleSheetConnectorService,
  ) {}

  @Post()
  async submit(@Body() submitBody: SubmitBody) {
    const ID = process.env.sheet_id;

    await this.googleSheetConnectorService.addRow(ID, 'A1', [
      [
        submitBody.name,
        submitBody.phone,
        submitBody.email,
        submitBody.comment ?? '',
      ],
    ]);
  }
}
