import { Injectable } from '@nestjs/common';

import * as HOUSES from '../../assets/houses-mock.json';

type HouseInfoItem = {
  title: string;
  values: string[][];
};

export type House = {
  id: number;
  area: number;
  price: string;
  log_size: string;
  hallway: string;
  images: string[];
  information: HouseInfoItem[];
  characteristic: string[];
  complection: string[];
};

@Injectable()
export class HousesService {
  getList(): House[] {
    // @ts-expect-error because
    return HOUSES.default;
  }
  getHouse(id: string): House {
    // @ts-expect-error because
    const houses = HOUSES.default as unknown as House[];

    return houses.find((item) => String(item.id) === String(id));
  }
}
