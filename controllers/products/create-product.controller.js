const {
    responseService, productService, stockService
} = require('../../services')

async function createProductController(req, res) {
    const {
        name,
        SKU,
        categoryId,
        brandId,
        price,
        image,
    } = req.body

    try {
        const result = await productService.create(name, SKU, categoryId, brandId, price, image)
        console.log(result.id)

        await stockService.createStock(result.id, 0)

        // res.redirect('/products')

        responseService.sendSuccessResponse(res, result, 201)
    } catch (e) {
        responseService.sendErrorResponse(res, e.message)
    }
}

module.exports = createProductController
