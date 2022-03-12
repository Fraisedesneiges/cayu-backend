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
        const productInformationReduced = this.http
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
        const productInformationFormated = await (0, open_food_facts_utils_1.parseValuableInformation)(await productInformationReduced);
        console.log('-----------------------------------------------------------\n', 'UCare back-end products endpoint has been called and return :', '\n', productInformationFormated, '\n-----------------------------------------------------------');
        return productInformationFormated;
    }
    async getAlternativeProductInformation(category) {
        const firstRandomIndex = (0, open_food_facts_utils_1.randomIntFromInterval)(0, 10);
        const secondRandomIndex = firstRandomIndex + (0, open_food_facts_utils_1.randomIntFromInterval)(0, 10);
        const alternativeProductInformationReduced = this.http
            .get('https://world.openfoodfacts.org/category/' + category + '.json')
            .then((response) => '{"alternativesProducts":[{"product_id":"' +
            response.data.products[firstRandomIndex]._id +
            '", "product_title":"' +
            response.data.products[firstRandomIndex].product_name +
            '", "product_image":"' +
            response.data.products[firstRandomIndex].image_front_small_url +
            '", "nustriscore_grade":"' +
            response.data.products[firstRandomIndex].nutrition_grades +
            '", "ecoscore_grade":"' +
            response.data.products[firstRandomIndex].ecoscore_grade +
            '", "nova_group":"' +
            response.data.products[firstRandomIndex].nova_group +
            '", "ingredients_analysis_tags":"' +
            response.data.products[firstRandomIndex].ingredients_analysis_tags +
            '", "categories_hierarchy":"' +
            response.data.products[firstRandomIndex].categories_hierarchy +
            '"}' +
            ',{"product_id":"' +
            response.data.products[secondRandomIndex]._id +
            '", "product_title":"' +
            response.data.products[secondRandomIndex].product_name +
            '", "product_image":"' +
            response.data.products[secondRandomIndex].image_front_small_url +
            '", "nustriscore_grade":"' +
            response.data.products[secondRandomIndex].nutrition_grades +
            '", "ecoscore_grade":"' +
            response.data.products[secondRandomIndex].ecoscore_grade +
            '", "nova_group":"' +
            response.data.products[secondRandomIndex].nova_group +
            '", "ingredients_analysis_tags":"' +
            response.data.products[secondRandomIndex].ingredients_analysis_tags +
            '", "categories_hierarchy":"' +
            response.data.products[secondRandomIndex].categories_hierarchy +
            '"}]}')
            .catch((err) => {
            throw new common_1.HttpException(err.response.data, err.response.status);
        });
        const alternativeInformationFormated = await (0, open_food_facts_utils_1.parseValuableInformationAlternative)(await alternativeProductInformationReduced);
        console.log('-----------------------------------------------------------\n', 'UCare back-end category endpoint has been called and return :', '\n', alternativeInformationFormated, '\n-----------------------------------------------------------');
        return alternativeInformationFormated;
    }
};
OpenFoodFactsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [nestjs_http_promise_1.HttpService])
], OpenFoodFactsService);
exports.OpenFoodFactsService = OpenFoodFactsService;
//# sourceMappingURL=open-food-facts.service.js.map