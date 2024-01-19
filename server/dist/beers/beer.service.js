"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeerService = void 0;
const common_1 = require("@nestjs/common");
let BeerService = class BeerService {
    constructor() {
        this.beers = [
            { id: 1, name: 'lager', description: 'peffko', price: 15 },
            { id: 2, name: 'pils', description: 'pivandriy', price: 25 },
        ];
    }
    getAllBeers() {
        console.log('beeers');
        return this.beers;
    }
    getBeer(id) {
        return this.beers.find(b => b.id = id);
    }
};
exports.BeerService = BeerService;
exports.BeerService = BeerService = __decorate([
    (0, common_1.Injectable)()
], BeerService);
//# sourceMappingURL=beer.service.js.map