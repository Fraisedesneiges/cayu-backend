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
const open_food_facts_utils_1 = require("./open-food-facts.utils");
let OpenFoodFactsService = class OpenFoodFactsService {
    constructor(http) {
        this.http = http;
    }
    async getProductInformation(id) {
        let productInformationReduced = this.http
            .get('https://world.openfoodfacts.org/api/v0/product/' + id + '.json')
            .then((response) => '{"product_id":"' +
            response.data.product._id +
            '", "product_title":"' +
            response.data.product.product_name +
            '", "product_image":"' +
            response.data.product.image_front_small_url +
            '", "nustriscore_grade":"' +
            response.data.product.nutrition_grades +
            '", "ecoscore_grade":"' +
            response.data.product.ecoscore_grade +
            '", "nova_group":"' +
            response.data.product.nova_group +
            '", "ingredients_analysis_tags":"' +
            response.data.product.ingredients_analysis_tags +
            '", "categories_hierarchy":"' +
            response.data.product.categories_hierarchy +
            '"}')
            .catch((err) => {
            throw new common_1.HttpException(err.response.data, err.response.status);
        });
        let productInformationFormated = await (0, open_food_facts_utils_1.parseValuableInformation)(await productInformationReduced);
        console.log('-----------------------------------' +
            'UCare back-end has been called and return :' +
            '\n', productInformationFormated);
        return productInformationFormated;
    }
    async getAlternativeProductInformation(category) {
        let alternativeProductInformationReduced = this.http
            .get('https://world.openfoodfacts.org/category/' + category + '.json')
            .then((response) => '"alternativesProducts":[{"product_id":"' +
            response.data.products[0]._id +
            '", "product_title":"' +
            response.data.products[0].product_name +
            '", "product_image":"' +
            response.data.products[0].image_front_small_url +
            '", "nustriscore_grade":"' +
            response.data.products[0].nutrition_grades +
            '", "ecoscore_grade":"' +
            response.data.products[0].ecoscore_grade +
            '", "nova_group":"' +
            response.data.products[0].nova_group +
            '", "ingredients_analysis_tags":"' +
            response.data.products[0].ingredients_analysis_tags +
            '"}' +
            '{"product_id":"' +
            response.data.products[1]._id +
            '", "product_title":"' +
            response.data.products[1].product_name +
            '", "product_image":"' +
            response.data.products[1].image_front_small_url +
            '", "nustriscore_grade":"' +
            response.data.products[1].nutrition_grades +
            '", "ecoscore_grade":"' +
            response.data.products[1].ecoscore_grade +
            '", "nova_group":"' +
            response.data.products[1].nova_group +
            '", "ingredients_analysis_tags":"' +
            response.data.products[1].ingredients_analysis_tags +
            '"}')
            .catch((err) => {
            throw new common_1.HttpException(err.response.data, err.response.status);
        });
        console.log('-----------------------------------' +
            'UCare back-end has been called and return :' +
            '\n', alternativeProductInformationReduced);
        return alternativeProductInformationReduced;
    }
};
OpenFoodFactsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [nestjs_http_promise_1.HttpService])
], OpenFoodFactsService);
exports.OpenFoodFactsService = OpenFoodFactsService;
//# sourceMappingURL=open-food-facts.service.js.map