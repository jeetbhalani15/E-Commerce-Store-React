/**
 * search product based on matching name with searchChar string
 * @param {array} products - Array of product objects
 * @param {string} searchChar - searchChar string.
 * @returns {array} - Filtered array of objects.
 */

export const searchFromProducts = (products, searchChar)=>{
    if(!searchChar)
      return products;
    return products.filter((items)=> items.Name.toLowerCase().includes(searchChar.toLowerCase())
    
  );
}