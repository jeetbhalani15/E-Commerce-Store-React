/**
 * Sorts json array.
 * @param {array} products - Array of product objects.
 * @param {string} sortBy - sort condition.
 * @returns {array} - sorted array of objects.
 */

export const SortProducts = (products, sortBy)=>{
  
      if(sortBy==="PRICE_HIGH_TO_LOW")
          return products.sort((a,b)=> Number(b.Price) - Number(a.Price));
      if(sortBy==="PRICE_LOW_TO_HIGH")
          return products.sort((a,b)=> Number(a.Price) - Number(b.Price));
      if(sortBy==="RATINGS_HIGH_TO_LOW")
          return products.sort((a,b)=> Number(b.ratings) - Number(a.ratings));
      if(sortBy==="RATINGS_LOW_TO_HIGH")
          return products.sort((a,b)=> Number(a.ratings) - Number(b.ratings));
            
     return products;
        }
          
        
  