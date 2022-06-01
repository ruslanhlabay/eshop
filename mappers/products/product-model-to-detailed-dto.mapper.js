const  {ProductDetailedDto} = require('../../dto')

function productModelToDetailedDtoMapper(product) {

    const pInfo = product.info.map( (item) => ({ "title":item.attribute.title,"value": item.value}) )

    return new ProductDetailedDto(
        product.id,
        product.category.title,
        product.name,
        product.price,
        product.brand.title,
        product.image,
        product.SKU,
        product.stock.quantity,
        pInfo,
    )
}

module.exports = productModelToDetailedDtoMapper