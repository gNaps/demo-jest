const PRODUCT = {
    price: 15.99
}

const PRODUCT_TWO = {
    price: 299.99
}

const CART = [
    {...PRODUCT, qty: 2},
    {...PRODUCT_TWO, qty: 1}
]

module.exports = {
    PRODUCT,
    PRODUCT_TWO,
    CART
}