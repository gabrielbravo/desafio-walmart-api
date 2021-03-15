const Product = require('../models/producto');

const searchProducts = (codeFilter, orFilter, skip, size) => {
    return new Promise((resolve, reject) => {
        Product
        .find(codeFilter)
        .or(orFilter)
        .limit(size)
        .skip(skip)
        .exec((err, products) => {
            if(err) {
                reject(err);
                return;
            }
            resolve(products);
        });
    })
}

module.exports = { searchProducts };
