import { getAllProducts, getProduct, getProductsByOffers, getProductsByRating, getProductsByRecentDate } from "./getProducts";
import { convertProductToProductFromCart, getProductDiscount, getProductPriceByDiscountByNot } from "./helpers";

export const ProductsLogic = {
    getAllProducts,
    getProductsByRecentDate,
    getProductsByOffers,
    getProductsByRating,
    getProductDiscount,
    convertProductToProductFromCart,
    getProductPriceByDiscountByNot,
    getProduct
}