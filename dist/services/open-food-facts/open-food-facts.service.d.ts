import { HttpService } from 'nestjs-http-promise';
import { productFormated } from './interfaces/productResponse.interface';
import { alternativeFormated } from './interfaces/alternativeResponse.interface';
export declare class OpenFoodFactsService {
    private http;
    constructor(http: HttpService);
    getProductInformation(id: any): Promise<productFormated>;
    getAlternativeProductInformation(category: any): Promise<alternativeFormated>;
}
