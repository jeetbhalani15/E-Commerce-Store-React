/**
 * Filter json array based on rating prop
 * @param {array} products - Array of product objects
 * @param {string} price - minimum price.
 * @returns {array} - Filtered array of objects.
 */

 export const filterByPrice = (products,price)=>{
    return products.filter((item)=> Number(item.Price) <= price);
};