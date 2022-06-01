const {Basket, BasketProduct } = require('../../database/models')
const {responseService} = require('../../services')

async function getBasketProductsController(req, res) {

    let {id} = req.body

    try {
        const basketProducts = await Basket.findAll({
            where: {
                basketId: id
            },
            include: {
                model: BasketProduct,
                attributes: [],
            }
        })
        console.log(basketProducts)
        if (basketProducts.length > 0) {
            responseService.sendSuccessResponse(
                res,
                {
                    productList: basketProducts
                }
            )
        } else res.send({
            error: 'Товари в кошику відсутні'
        })
    } catch (e) {
        responseService.sendErrorResponse(
            res,
            e.message,
        )
    }

}

module.exports = getBasketProductsController