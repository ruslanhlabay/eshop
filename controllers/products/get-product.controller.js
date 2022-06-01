const {
    Product,
    Stock,
    Brand,
    Category,
    Attribute,
    AttributeValue
} = require('../../database/models')

const {responseService} = require('../../services')

const {
    productModelToDetailedDtoMapper
} = require('../../mappers/products')


async function getProductListController(req, res) {
    const id = Number(req.params.id)

    try {
        const product = await Product.findOne({
            where: { id },
            include: [
                {
                    model: Brand,
                    attributes: ['title'],
                },
                {
                    model: Category,
                    attributes: ['title'],
                },
                {
                    model: Stock,
                    attributes: ['quantity'],
                },
                {
                    model: AttributeValue,
                    as: 'info',
                    //raw: true,
                    attributes: ['value'],
                    include: {
                        model: Attribute,
                        attributes: ['title']
                    },
                }
            ]
        })

        if (product) {
            responseService.sendSuccessResponse(
                res,
                {
                    product: productModelToDetailedDtoMapper(product)
                }
            )
        } else res.send({
            error: 'Товар відсутній'
        })
    } catch (e) {
        responseService.sendErrorResponse(
            res,
            e.message,
        )
    }
}

module.exports = getProductListController
