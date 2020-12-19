const PRODUCT = {
    id: 1,
    price: 15.99
}

const PRODUCT_TWO = {
    id: 2,
    price: 299.99
}

const PRODUCT_TO_ADD = {
    id: 3,
    price: 69.99
}

const CART = [
    {...PRODUCT, qty: 2},
    {...PRODUCT_TWO, qty: 1}
]


module.exports = {
    PRODUCT,
    PRODUCT_TWO,
    PRODUCT_TO_ADD,
    CART
}