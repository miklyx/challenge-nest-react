"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeerModule = void 0;
const apollo_1 = require("@nestjs/apollo");
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const beer_resolver_1 = require("./beer.resolver");
const beer_service_1 = require("./beer.service");
const default_1 = require("@apollo/server/plugin/landingPage/default");
let BeerModule = class BeerModule {
};
exports.BeerModule = BeerModule;
exports.BeerModule = BeerModule = __decorate([
    (0, common_1.Module)({
        providers: [beer_resolver_1.BeerResolver, beer_service_1.BeerService],
        imports: [
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloFederationDriver,
                typePaths: ['**/*.graphql'],
                playground: false,
                plugins: [(0, default_1.ApolloServerPluginLandingPageLocalDefault)()],
            }),
        ],
    })
], BeerModule);
//# sourceMappingURL=beer.module.js.map