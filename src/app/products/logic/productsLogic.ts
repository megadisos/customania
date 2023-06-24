import { getAllProducts, getProductsByOffers, getProductsByRating, getProductsByRecentDate } from "./getProducts";
import { getProductDiscount } from "./helpers";

export const ProductsLogic = {
    getAllProducts,
    getProductsByRecentDate,
    getProductsByOffers,
    getProductsByRating,
    getProductDiscount
}