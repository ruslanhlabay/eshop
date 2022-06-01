const {User} = require('../../database/models')
const {responseService} = require('../../services')

async function getAllUsersController(req, res) {
    try {
        const users = await User.findAll({
            where: {
                isAdmin: false,
            },
            attributes: ['email'],
        })

        if (users.length > 0) {
            responseService.sendSuccessResponse(res,
                { users }
            )
        } else res.send({
            error: 'Покупці відсутні.'
        })

    } catch (e) {
        responseService.sendErrorResponse(res, e.message,)
    }

}

module.exports = getAllUsersController