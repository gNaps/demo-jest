const { productPrice } = require('./products')

/**
 * Given a Cart return the total
 * @param {Cart} cart 
 */
const cartTotal = (cart) => {
    let total = 0

    try{ 
        total = cart.reduce((acc, value) => acc + (productPrice(value) * value.qty), 0)
    } catch (err) {

    }

    return parseFloat(total.toFixed(2))
}

/**
 * Given a cart, a product and quantity add product to cart
 * @param {Cart} cart 
 * @param {Product} product 
 * @param {number} qty 
 */
const addProduct = (cart, product, qty) => {
    cart.push({...product, qty});
}

/**
 * Given a cart and a product remove the product
 * @param {Cart} cart 
 * @param {Product} productToRemove 
 */
const removeProduct = (cart, productToRemove) => {
    return cart.filter((product) => {return product.id != productToRemove.id})
}

module.exports = {
    cartTotal,
    addProduct,
    removeProduct
}