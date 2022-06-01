const userControllers = require('./users')
const productControllers = require('./products')
const basketControllers = require('./basket')

module.exports = {
    ...userControllers,
    ...productControllers,
    ...basketControllers,
}