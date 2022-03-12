import { product, productFormated } from './productResponse.interface';
export declare type alternative = Array<product>;
export interface alternativeFormated extends Array<productFormated> {
    alternativesProducts: any;
}
