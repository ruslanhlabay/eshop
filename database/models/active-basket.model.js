const sequelize = require('../index')
const {DataTypes} = require('sequelize')

const ActiveBasket = sequelize.define(
        'activeBasket',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'user_id',
        },
        basketId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'basket_id',
        },
    },
    {
        schema: process.env.DB_SCHEMA,
        tableName: 'active_baskets',
    })

module.exports = ActiveBasket