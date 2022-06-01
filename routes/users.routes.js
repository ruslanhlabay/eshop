const {
    signUpController,
    signInController,
    getAllController,
} = require('../controllers/users')


function initUserRoutes(app) {
    app.post('/sign-up', signUpController)
    app.get('/sign-in', signInController)
    app.get('/users', getAllController)

}

module.exports = initUserRoutes