import { Injectable } from '@nestjs/common';

import * as BATHS from '../../assets/baths-mock.json';

type BathInfoItem = {
  title: string;
  values: string[][];
};

export type Bath = {
  id: number;
  area: number;
  price: string;
  log_size: string;
  hallway: string;
  images: string[];
  information: BathInfoItem[];
  characteristic: string[];
  complection: string[];
};

@Injectable()
export class BathsService {
  getList(): Bath[] {
    // @ts-expect-error because
    return BATHS.default;
  }

  getBath(id: string): Bath {
    // @ts-expect-error because
    const baths = BATHS.default as unknown as Bath[];

    return baths.find((item) => String(item.id) === String(id));
  }
}
