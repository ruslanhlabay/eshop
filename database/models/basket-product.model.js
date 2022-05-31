const sequelize = require('../index')
const {DataTypes} = require('sequelize')

const BasketProduct = sequelize.define(
        'basketProduct',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        basketId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'basket_id',
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'product_id',
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
            validate: {
                isInt: true,
                min: 1,
            }
        },
    },
    {
        schema: process.env.DB_SCHEMA,
        tableName: 'basket_products',
    }
    )

module.exports = BasketProduct