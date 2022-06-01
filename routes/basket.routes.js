const {
    addProductToBasketController,
    removeProductFromBasketController,
    getBasketController,

} = require('../controllers/basket')

function initBasketRoutes(app) {
    app.get('/basket', getBasketController)

    app.post('/basket', addProductToBasketController)

    app.delete('/basket', removeProductFromBasketController)


}

module.exports = initBasketRoutes
