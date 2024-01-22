import { Injectable } from '@nestjs/common';
import { getAllBeers } from 'src/db/db';
import { Beer } from './beer.interfaces';
import { Observable } from 'rxjs';

@Injectable()
export class BeerService {
  /* private beers: Beer[] = [
    {id: 1, name: 'lager', description: 'peffko', price: 15},
    {id: 2, name: 'pils', description: 'pivandriy', price: 25},
    ] */

  getAllBeers(): any {
    const beers = getAllBeers()
    return beers
  }
  getRandomNumericData(): any {
    const num = Math.floor(Math.random() * 100)
    return {data: num}
  }
  /* getBeer(id:number) : Beer {
    return this.beers.find(b => b.id = id);
  } */
}