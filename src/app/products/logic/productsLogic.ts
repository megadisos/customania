import { getAllProducts, getProduct, getProductsByOffers, getProductsByRating, getProductsByRecentDate } from "./getProducts";
import { convertProductToProductFromCart, getProductDiscount, getProductPriceByDiscountByNot, getProductTotal } from "./helpers";
import { updateProductsQuantities } from "./postProducts";
import { createNewSale, updateSale } from "./postSale";

export const ProductsLogic = {
    getAllProducts,
    getProductsByRecentDate,
    getProductsByOffers,
    getProductsByRating,
    getProductDiscount,
    convertProductToProductFromCart,
    getProductPriceByDiscountByNot,
    getProduct,
    getProductTotal,
    createNewSale,
    updateSale,
    updateProductsQuantities
}