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

const addProduct = (cart, product, qty) => {
    cart.push({...product, qty});
}

const removeProduct = (cart, productToRemove) => {
    return cart.filter((product) => {return product.id != productToRemove.id})
}

module.exports = {
    cartTotal,
    addProduct,
    removeProduct
}