const { isPalindrome, isInteger, productWithPrices } = require('../utils/util');

describe('Test Utils', () => {
    test('IsPalindrome: ABCBA is true', () => {
        expect(isPalindrome('ABCBA')).toBe(true);
    });

    test('IsPalindrome: ABCBB is false', () => {
        expect(isPalindrome('ABCBB')).toBe(false);
    });

    test('isInteger: "1" is true', () => {
        expect(isInteger('1')).toBe(true);
    })

    test('isInteger: "A" is false', () => {
        expect(isInteger('A')).toBe(false);
    });

    test('ProductWithPrices returns object with original_price property', () => {
        const mock = {
            id: 1,
            brand: 'brand',
            description: 'description',
            image: 'image',
            price: 1000
        };

        expect(productWithPrices(mock)).toEqual({
            id: 1,
            brand: 'brand',
            description: 'description',
            image: 'image',
            original_price: 1000,
            price: 500
        })
    })
})