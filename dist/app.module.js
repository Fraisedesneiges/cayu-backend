"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const products_controller_1 = require("./controllers/products/products.controller");
const category_controller_1 = require("./controllers/categories/category.controller");
const open_food_facts_service_1 = require("./services/open-food-facts/open-food-facts.service");
const users_controller_1 = require("./controllers/users/users.controller");
const nestjs_http_promise_1 = require("nestjs-http-promise");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [nestjs_http_promise_1.HttpModule],
        controllers: [
            app_controller_1.AppController,
            products_controller_1.ProductsController,
            users_controller_1.UsersController,
            category_controller_1.CategoryController,
        ],
        providers: [app_service_1.AppService, open_food_facts_service_1.OpenFoodFactsService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map