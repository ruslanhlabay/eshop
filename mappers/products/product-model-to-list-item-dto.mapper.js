const  {ProductListItemDto} = require('../../dto')

function productModelToListItemDtoMapper(product) {

    return new ProductListItemDto(
        product.id,
        product.name,
        product.price,
        product.brand.title,
        product.image,
        product.SKU,
    )
}

module.exports = productModelToListItemDtoMapper