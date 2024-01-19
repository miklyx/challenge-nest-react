import { Beer } from './beer.interfaces';
export declare class BeerService {
    private beers;
    getAllBeers(): Beer[];
    getBeer(id: number): Beer;
}
