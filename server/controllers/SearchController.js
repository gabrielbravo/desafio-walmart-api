const { searchProducts } = require('../services/SearchService');
const { getByCode } = require('../services/ProductoService');
const { isPalindrome, isInteger, productWithPrices } = require('../utils/util');

class SearchController {
    static async search(req, res, next) {
        try { 
            console.log('req',req)
            if(Object.keys(req.query).length === 0) throw new Error('query is empty');

            const text = req.query.text;
            const page = req.query.page;

            const size = 20
            const skip = size * (page - 1);   
            const isTextPalindrome = await isPalindrome(text);
            let products = [];
            let filter = {};
            let orFilter = {};
            
            if (isInteger(text)) {
                filter = { id: text }
            } else {
                orFilter = [ 
                    {description: { $regex: text, $options: "i" }},
                    {brand: { $regex: text, $options: "i" }}
                ];
            }

            products = await searchProducts(filter, orFilter, skip, size);

            if(isTextPalindrome) {
                products = products.map(p => {
                    return productWithPrices(p);
                })
            }
            
            res
            .status(200)
            .json(products);
        } catch(err) {
            return next(err);
        }
    }

    static async getByCode(req, res, next) {
        try { 
            const code = req.params.code
            const product = await getByCode(code);

            res.status(200).json(product)
        } catch(ex) {
            return next(err);
        }
    } 
}

module.exports = SearchController;