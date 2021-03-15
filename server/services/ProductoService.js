const Producto = require('../models/producto');

const getByCode = id => {
    return new Promise((resolve, reject) => {
        Producto
        .findOne({ id })
        .exec((err, product) => {
            if(err) {
                reject(err);
                return;
            }
            resolve(product);
        });
    })
}

const getProducts = () => {
    return new Promise((resolve, reject) => {
        Producto
        .find()
        .sort([['description', 'ascending']])
        .exec((err, products) => {
            if(err) {
                reject(err);
                return;
            }
            resolve(products);
        });
    })
}

module.exports = { getByCode, getProducts };
