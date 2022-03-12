import { productFormated } from './interfaces/productResponse.interface';
import { alternativeFormated } from './interfaces/alternativeResponse.interface';
export declare function randomIntFromInterval(min: any, max: any): number;
export declare const parseValuableInformation: (productInformation: string) => productFormated;
export declare const parseValuableInformationAlternative: (productInformation: string) => alternativeFormated;
