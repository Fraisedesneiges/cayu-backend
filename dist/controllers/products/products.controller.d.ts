import { OpenFoodFactsService } from '../../services/open-food-facts/open-food-facts.service';
export declare class ProductsController {
    private openFoodFactsService;
    constructor(openFoodFactsService: OpenFoodFactsService);
    getSpecifcProducts(id: Int32Array): Promise<JSON>;
}
