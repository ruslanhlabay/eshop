const {
    createProductController,
    getProductListController,
    getProductController
} = require('../controllers/products')
const {addProductToStockController} = require("../controllers");

function initProductRoutes(app) {
    app.post('/products', createProductController)

    app.get('/products', getProductListController)

    app.get('/products/:id', getProductController)

    app.put('/products/stock', addProductToStockController)
}

module.exports = initProductRoutes
