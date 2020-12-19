/**
 * Given a Product return the price
 * @param {Product} product 
 */
const productPrice = (product) => {
    return product.price || 0
}

module.exports = {
    productPrice
}