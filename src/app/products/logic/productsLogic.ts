import { getAllProducts, getProductsByOffers, getProductsByRating, getProductsByRecentDate } from "./getProducts";
import { convertProductToProductFromCart, getProductDiscount } from "./helpers";

export const ProductsLogic = {
    getAllProducts,
    getProductsByRecentDate,
    getProductsByOffers,
    getProductsByRating,
    getProductDiscount,
    convertProductToProductFromCart
}