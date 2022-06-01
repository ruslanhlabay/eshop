const {
    responseService, stockService,
} = require('../../services')

async function addProductToStockController(req, res) {
    const {
        productId,
        quantity,
    } = req.body

    try {

        const productToIncrease = await stockService.getStock(productId)

            //    const result = await productToIncrease.increment({quantity: quantity})

        const result = await stockService.decreaseProduct(productToIncrease, quantity)

        // res.redirect('/products')

        responseService.sendSuccessResponse(res, result, 201)
    } catch (e) {
        responseService.sendErrorResponse(res, e.message)
    }
}

module.exports = addProductToStockController
