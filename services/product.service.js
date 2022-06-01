const {Product} = require('../database/models')

async function create(name, SKU, categoryId, brandId, price, image) {
    return Product.create({
        name,
        SKU,
        categoryId,
        brandId,
        price,
        image: image || null,
        })
}


module.exports = {
    create,
}
