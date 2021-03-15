const isPalindrome = (text) => {
    if(text.length===0) return false;
    
    text=text.toLowerCase().replace(/\s/g,"");
    fraserReverse=text.split("").reverse().toString();
    
    for (var i = 0; i < ((fraserReverse.length)-1); i++) {
        fraserReverse=fraserReverse.replace(",","");
    };

    if(text===fraserReverse)
        return true;
    else
        return false;
}

const isInteger = value => parseInt(value)==value

const productWithPrices = product => {
    return {
        id: product.id,
        brand: product.brand,
        description: product.description,
        image: product.image,
        original_price: product.price,
        price: Math.round(product.price - (product.price*0.5))
    }
}

module.exports = { isPalindrome, isInteger, productWithPrices };