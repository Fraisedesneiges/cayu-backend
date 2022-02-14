"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseValuableInformation = void 0;
const parseValuableInformation = (productInformation) => {
    let productInformationJSON = JSON.parse(productInformation);
    let productInformationFormated = {};
    productInformationFormated = productInformationJSON;
    productInformationFormated.vegan = isVegan(productInformationJSON);
    productInformationFormated.vegetarian = isVegetarian(productInformationJSON);
    productInformationFormated.palmOilFree = isPalmOilFree(productInformationJSON);
    return productInformationFormated;
};
exports.parseValuableInformation = parseValuableInformation;
const isVegan = (productInformationJSON) => {
    if (productInformationJSON.ingredients_analysis_tags.includes('non-vegan')) {
        return false;
    }
    else if (productInformationJSON.ingredients_analysis_tags.includes('vegan-status-unknown')) {
        return undefined;
    }
    else {
        return true;
    }
};
const isVegetarian = (productInformationJSON) => {
    if (productInformationJSON.ingredients_analysis_tags.includes('non-vegetarian')) {
        return false;
    }
    else if (productInformationJSON.ingredients_analysis_tags.includes('vegetarian-status-unknown')) {
        return undefined;
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