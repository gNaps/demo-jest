const { PRODUCT } = require('./mock')
const { PRODUCT_TWO } = require('./mock')
const { PRODUCT_TO_ADD } = require('./mock')
const { CART } = require('./mock')

const { productPrice } = require('./products')
const { cartTotal } = require('./cart')
const { addProduct } = require('./cart')
const { removeProduct } = require('./cart')

describe('Product', () => {
    test('Product Price', () => {
        expect(productPrice(PRODUCT)).toBe(15.99);
    });
    test('Product Price 2', () => {
        expect(productPrice(PRODUCT_TWO)).toBe(299.99);
    });
})


describe('Cart', () => {
    test('Cart Total', () => {
        expect(cartTotal(CART)).toBe(331.97);
    });

    test('Add a product', () => {
        addProduct(CART, PRODUCT_TO_ADD, 1);
        expect(cartTotal(CART)).toBe(401.96);
    });

    test('Remove a product', () => {
        const NEW_CART = removeProduct(CART, PRODUCT_TO_ADD);
        expect(cartTotal(NEW_CART)).toBe(331.97);
    });
})
