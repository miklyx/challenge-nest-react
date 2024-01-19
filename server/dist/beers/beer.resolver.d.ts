import { BeerService } from "src/beers/beer.service";
export declare class BeerResolver {
    private beerService;
    constructor(beerService: BeerService);
    beer(id: number): import("./beer.interfaces").Beer;
    beers(): import("./beer.interfaces").Beer[];
}
