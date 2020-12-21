const { PRODUCT } = require('./mock')
const { PRODUCT_TWO } = require('./mock')
const { PRODUCT_TO_ADD } = require('./mock')
const { CART } = require('./mock')

const { productPrice } = require('./products')
const { cartTotal } = require('./cart')
const { addProduct } = require('./cart')
const { removeProduct } = require('./cart')
const { countProduct } = require('./cart')

describe('Product', () => {
    test('Product Price', () => {
        expect(productPrice(PRODUCT)).toBe(15.99);
    });
    test('Product Price 2', () => {
        expect(productPrice(PRODUCT_TWO)).toBe(299.99);
    });
})


describe('Cart base', () => {
    test('Cart Total', () => {
        expect(cartTotal(CART)).toBe(331.97);
    });

    test('Add a product', () => {
        const NEW_CART = addProduct(CART, PRODUCT_TO_ADD, 1);
        expect(cartTotal(NEW_CART)).toBe(401.96);
    });

    test('Remove a product', () => {
        const NEW_CART = removeProduct(CART, PRODUCT_TO_ADD);
        expect(cartTotal(NEW_CART)).toBe(331.97);
    });
})

describe('Cart advanced', () => {
    test('Add quantity 2', () => {
        const NEW_CART = addProduct(CART, PRODUCT_TO_ADD, 2);
        expect(cartTotal(NEW_CART)).toBe(471.95);
    });

    test('Remove quantity 1', () => {
        const NEW_CART = addProduct(CART, PRODUCT_TO_ADD, 1);
        expect(cartTotal(NEW_CART)).toBe(401.96);
    });

    test('Add quantity 3', () => {
        let NEW_CART = addProduct(CART, PRODUCT_TO_ADD, 1);
        let NEW_CART_2 = addProduct(NEW_CART, PRODUCT_TO_ADD, 3);
        expect(cartTotal(NEW_CART_2)).toBe(611.93);
    });
})
