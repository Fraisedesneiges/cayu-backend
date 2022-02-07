"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenFoodFactsService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_http_promise_1 = require("nestjs-http-promise");
let OpenFoodFactsService = class OpenFoodFactsService {
    constructor(http) {
        this.http = http;
    }
    async getProductInformation(id) {
        let essentialProductInformation = this.http
            .get('https://world.openfoodfacts.org/api/v0/product/' + id + '.json')
            .then((response) => '{"product_id":"' +
            response.data.product._id +
            '", "product_title":"' +
            response.data.product.product_name +
            '", "product_image":"' +
            response.data.product.image_front_small_url +
            '", "nustriscore_grade":"' +
            response.data.product.nutrition_grades +
            '"}')
            .catch((err) => {
            throw new common_1.HttpException(err.response.data, err.response.status);
        });
        let essentialProductInformationJson = JSON.parse(await essentialProductInformation);
        console.log('UCare back-end has been called and return : \n', essentialProductInformationJson);
        return essentialProductInformationJson;
    }
};
OpenFoodFactsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [nestjs_http_promise_1.HttpService])
], OpenFoodFactsService);
exports.OpenFoodFactsService = OpenFoodFactsService;
//# sourceMappingURL=open-food-facts.service.js.map