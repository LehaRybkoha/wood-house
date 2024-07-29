import { Injectable } from '@nestjs/common';

import * as BATHS from '../../assets/baths-mock.json';

export type Bath = {
  id: number;
  area: number;
  price: string;
  log_size: string;
  hallway: string;
};

@Injectable()
export class BathsService {
  getList(): Bath[] {
    // @ts-expect-error because
    return BATHS.default;
  }
  getBath(): string {
    return 'JSON.parse(baths)';
  }
}
