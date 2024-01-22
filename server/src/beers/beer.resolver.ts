import { Resolver, Query, ResolveField } from "@nestjs/graphql";
import { Args } from "@nestjs/graphql";
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
  beers(){
    return this.beerService.getAllBeers()
  }
}