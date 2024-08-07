import { Injectable } from '@nestjs/common';

import * as CARCAS from '../../assets/houses-mock.json';

type CarcasInfoItem = {
  title: string;
  values: string[][];
};

export type Carcas = {
  id: number;
  area: number;
  price: string;
  log_size: string;
  hallway: string;
  images: string[];
  information: CarcasInfoItem[];
  characteristic: string[];
  complection: string[];
};

@Injectable()
export class CarcasService {
  getList(): Carcas[] {
    // @ts-expect-error because
    return CARCAS.default;
  }
  getCarcas(id: string): Carcas {
    // @ts-expect-error because
    const carcases = CARCAS.default as unknown as House[];

    return carcases.find((item) => String(item.id) === String(id));
  }
}
