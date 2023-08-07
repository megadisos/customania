import { registerNewSale, updateSaleApi } from "../data/postSales"
import { Sale, SaleStatus } from "../models/sales"

/**
 * Crea una nueva venta.
 * @returns {Sale} Devuelve un arreglo de productos.
 */
export const createNewSale = (sale:Sale):Promise<Sale> =>{
    return registerNewSale(sale)
}



/**
 * Actualizar estado de una venta.
 * @param newStatus SaleStatus model
 * @param transactionId id
 * @returns {Sale} Devuelve un arreglo de productos.
 */
export const updateSale = (newStatus:SaleStatus,transactionId:string):Promise<Sale> =>{
    return updateSaleApi(newStatus,transactionId)
}
