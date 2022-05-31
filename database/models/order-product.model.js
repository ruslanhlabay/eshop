const sequelize = require('../index')
const {DataTypes} = require('sequelize')

const OrderProduct = sequelize.define(
        'orderProduct',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        orderId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'order_id',
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
        tableName: 'order_products',
        paranoid: true,
    })

module.exports = OrderProduct