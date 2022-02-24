import { OpenFoodFactsService } from '../../services/open-food-facts/open-food-facts.service';
export declare class CategoryController {
    private openFoodFactsService;
    constructor(openFoodFactsService: OpenFoodFactsService);
    getAlternativeProducts(category: string): Promise<string>;
}
