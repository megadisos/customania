import { DeleteProductsFromCartNotAuthenticated } from "./deleteFromCart";
import { GetProductsFromCartNotAuthenticated, GetProductsFromCartNotAuthenticatedTotals } from "./getFromCart";
import { getProductTotals, updateProductsFromCard } from "./helpers";
import { AddToCart} from "./saveInCart";


export const CartLogic = {
    updateProductsFromCard,
    AddToCart,
    getProductTotals,
    GetProductsFromCartNotAuthenticated,
    GetProductsFromCartNotAuthenticatedTotals,
    DeleteProductsFromCartNotAuthenticated
}