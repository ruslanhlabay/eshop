const {
    Product,
    Stock,
    Brand,
    Category
} = require('../../database/models')

const {responseService} = require('../../services')

const {Op} = require('sequelize')

const {
    productModelToListItemDtoMapper,
} = require('../../mappers/products')


async function getProductListController(req, res) {

    let {brandId, typeId, limit, page} = req.query
    let minQuantityToShow = 0 // 0 - show all products in base(incl. out of stock), 1 - show only products in stock
    page = page || 1
    limit = limit || 10
    let offset = page * limit - limit

    try {
        const productList = await Product.findAndCountAll({
            include: [
                {
                    model: Stock,
                    attributes: ['quantity'],
                    required: true,
                    where: {
                        quantity: {
                            [Op.gte]: minQuantityToShow,
                        },
                    },
                },
                {
                    model: Brand,
                    attributes: ['title'],
                },
                {
                    model: Category,
                    attributes: ['title'],
                },
            ],
            distinct: true,
            limit,
            offset
        })

        if (productList.rows.length > 0) {
            responseService.sendSuccessResponse(
                res,
                {
                    productList: productList.rows.map((product) => productModelToListItemDtoMapper(product))
                }
            )
        } else res.send({
            error: 'Товари відсутні'
        })
    } catch (e) {
        responseService.sendErrorResponse(
            res,
            e.message,
        )
    }
}

module.exports = getProductListController