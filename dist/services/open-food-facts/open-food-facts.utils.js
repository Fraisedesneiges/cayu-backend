"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseValuableInformationAlternative = exports.parseValuableInformation = void 0;
const parseValuableInformation = (productInformation) => {
    let productInformationJSON = JSON.parse(productInformation);
    let productInformationFormated = {};
    productInformationFormated = productInformationJSON;
    productInformationFormated.firstCatego =
        productInformationJSON.categories_hierarchy.split('en:')[1].split(',')[0];
    productInformationFormated.vegan = isVegan(productInformationJSON);
    productInformationFormated.vegetarian = isVegetarian(productInformationJSON);
    productInformationFormated.palmOilFree = isPalmOilFree(productInformationJSON);
    return productInformationFormated;
};
exports.parseValuableInformation = parseValuableInformation;
const parseValuableInformationAlternative = (productInformation) => {
    let productInformationJSON = JSON.parse(productInformation);
    let productInformationFormated = {};
    productInformationFormated = productInformationJSON;
    productInformationFormated.alternativesProducts[0].firstCatego =
        productInformationJSON.alternativesProducts[0].categories_hierarchy
            .split('en:')[1]
            .split(',')[0];
    productInformationFormated.alternativesProducts[0].vegan = isVegan(productInformationJSON.alternativesProducts[0]);
    productInformationFormated.alternativesProducts[0].vegetarian = isVegetarian(productInformationJSON.alternativesProducts[0]);
    productInformationFormated.alternativesProducts[0].palmOilFree =
        isPalmOilFree(productInformationJSON.alternativesProducts[0]);
    productInformationFormated.alternativesProducts[1].firstCatego =
        productInformationJSON.alternativesProducts[1].categories_hierarchy
            .split('en:')[1]
            .split(',')[0];
    productInformationFormated.alternativesProducts[1].vegan = isVegan(productInformationJSON.alternativesProducts[1]);
    productInformationFormated.alternativesProducts[1].vegetarian = isVegetarian(productInformationJSON.alternativesProducts[1]);
    productInformationFormated.alternativesProducts[1].palmOilFree =
        isPalmOilFree(productInformationJSON.alternativesProducts[1]);
    return productInformationFormated;
};
exports.parseValuableInformationAlternative = parseValuableInformationAlternative;
const isVegan = (productInformationJSON) => {
    if (productInformationJSON.ingredients_analysis_tags.includes('non-vegan')) {
        return false;
    }
    else {
        return true;
    }
};
const isVegetarian = (productInformationJSON) => {
    if (productInformationJSON.ingredients_analysis_tags.includes('non-vegetarian')) {
        return false;
    }
    else {
        return true;
    }
};
const isPalmOilFree = (productInformationJSON) => {
    if (productInformationJSON.ingredients_analysis_tags.includes('palm-oil-free')) {
        return true;
    }
    else {
        return false;
    }
};
//# sourceMappingURL=open-food-facts.utils.js.map