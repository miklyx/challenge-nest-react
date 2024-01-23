import { Injectable } from '@nestjs/common';
import { getAllBeers } from 'src/db/db';
import { getRandomNumericData } from 'src/db/randomNumData';

@Injectable()
export class BeerService {

  getAllBeers(): any {
    const beers = getAllBeers()
    return beers
  }
  getRandomNumericData(): any {
    const randomNumericData = getRandomNumericData()
    return randomNumericData.data
  }
}