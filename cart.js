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

    return total
}

module.exports = {
    cartTotal
}