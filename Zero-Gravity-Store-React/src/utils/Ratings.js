/**
 
 * @param {array} products - Array of product objects
 * @param {string} rating - string for rating.
 * @returns {array} - Filtered array of objects.
 */

export const filterByRatings=(products,rating)=>{
    if(rating === "4_&_ABOVE")
       return products.filter((item)=> Number(item.ratings) >4);
    if(rating === "3_&_ABOVE")
       return products.filter((item)=> Number(item.ratings) >3);
    if(rating === "2_&_ABOVE")
       return products.filter((item)=> Number(item.ratings) >2);

    return products;

}