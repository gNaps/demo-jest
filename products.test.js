const { PRODUCT } = require('./mock')
const { PRODUCT_TWO } = require('./mock')
const { CART } = require('./mock')

const { productPrice } = require('./products')
const { cartTotal } = require('./cart')

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
})
