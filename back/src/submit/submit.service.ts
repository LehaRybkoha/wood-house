import { Injectable } from '@nestjs/common';

import * as HOUSES from '../../assets/baths-mock.json';

export type House = {
  id: number;
  area: number;
  price: string;
  log_size: string;
  hallway: string;
};

@Injectable()
export class HousesService {
  getList(): House[] {
    // @ts-expect-error because
    return HOUSES.default;
  }
  getBath(): string {
    return 'JSON.parse(baths)';
  }
}
