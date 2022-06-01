const {Stock} = require('../database/models')


async function getStock(id) {

    return Stock.findOne({
        where:
            { productId: id }
    })

}


async function createStock(productId, quantity) {

    return Stock.create({
        productId, quantity,
    })

}

async function decreaseProduct(product, quantity) {
    let message = 'Недостатньо товару. В наявності лише ' + product.quantity + ' одиниці'
    if ((product.quantity-quantity)>0) return product.decrement({quantity : quantity})
    throw new Error(message)
}


module.exports = {
    getStock, createStock, decreaseProduct,
}
