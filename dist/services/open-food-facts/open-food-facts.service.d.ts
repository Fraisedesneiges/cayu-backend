import { HttpService } from 'nestjs-http-promise';
export declare class OpenFoodFactsService {
    private http;
    constructor(http: HttpService);
    getProductInformation(id: any): Promise<JSON>;
}
