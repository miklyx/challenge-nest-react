import { Injectable } from '@nestjs/common';
import { MongoClient } from 'mongodb';
import { Beer } from './beer.interfaces';

@Injectable()
export class BeerService {
  private beers: Beer[] = [
    {id: 1, name: 'lager', description: 'peffko', price: 15},
    {id: 2, name: 'pils', description: 'pivandriy', price: 25},
    ]

  getAllBeers(): Beer[] {
    console.log('beeers')
    return this.beers;
  }

  getBeer(id:number) : Beer {
    return this.beers.find(b => b.id = id);
  }
}