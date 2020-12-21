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
 * Given a Cart return the count of product
 * @param {Cart} cart 
 */
const countProduct = (cart) => {
    return cart.length + 1
}

/**
 * Given a cart, a product and quantity add product to cart
 * @param {Cart} cart 
 * @param {Product} product 
 * @param {number} qty 
 */
const addProduct = (cart, product, qty) => {
    const elementsIndex = cart.findIndex(element => element.id === product.id)
    let newCart = [...cart]

    if(elementsIndex > 0) {
        const newQty = newCart[elementsIndex].qty + qty
        newCart[elementsIndex] = {...newCart[elementsIndex], qty: newQty}
    } else {
        newCart.push({...product, qty});
    }

    return newCart
}

/**
 * Given a cart and a product remove the qty
 * @param {Cart} cart 
 * @param {Product} product 
 * @param {number} qty
 */
const removeProduct = (cart, product, qty) => {
    const elementsIndex = cart.findIndex(element => element.id === product.id)
    let newCart = [...cart]

    if(elementsIndex > 0) {
        const newQty = newCart[elementsIndex].qty - qty
        if(newQty > 0) {
            newCart[elementsIndex] = {...newArray[elementsIndex], qty: newQty}
        } else {
            newCart = newCart.splice(elementsIndex, 1)
        }
    }

    return newCart
}

module.exports = {
    cartTotal,
    addProduct,
    removeProduct,
    countProduct
}