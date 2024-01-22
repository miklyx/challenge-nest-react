import { Resolver, Query } from "@nestjs/graphql";
//import { Args } from "@nestjs/graphql";
import { BeerService } from "src/beers/beer.service";

@Resolver('Beer')
export class BeerResolver {
  constructor(
    private beerService: BeerService
  ) {}

  /* @Query()
  beer(@Args('id') id: number){
    return this.beerService.getBeer(id)
  } */

  @Query()
  randomNumericData(){
    const data = this.beerService.getRandomNumericData();
    return data;
  }

  @Query()
  beers(){
    return this.beerService.getAllBeers()
  }
}