import { Resolver, Query } from '@nestjs/graphql';
import { BeerService } from 'src/beers/beer.service';
import { Beer } from './beer.interfaces';

@Resolver('Beer')
export class BeerResolver {
  constructor(
    private beerService: BeerService
  ) {}

  @Query()
  randomNumericData(): number[]{
    const data = this.beerService.getRandomNumericData();
    return data;
  }

  @Query()
  beers(): Promise<Beer[]>{
    return this.beerService.getAllBeers();
  }
}