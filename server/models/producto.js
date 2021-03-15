const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let productoSchema = new Schema({
    id: Number,
    brand: String,
    description: String,
    image: String,
    price: Number   
},{
    timestamps: true
});

productoSchema.index({ description: 'text', brand: 'text' });
module.exports = mongoose.model('Product', productoSchema);
