import { HttpService } from 'nestjs-http-promise';
import { productFormated } from './interfaces/productResponse.interface';
export declare class OpenFoodFactsService {
    private http;
    constructor(http: HttpService);
    getProductInformation(id: any): Promise<productFormated>;
}
