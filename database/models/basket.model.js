const sequelize = require('../index')
const {DataTypes} = require('sequelize')

const Basket = sequelize.define(
        'basket',
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
        totalPrice: {
            type: DataTypes.DECIMAL,
            defaultValue: 0,
            field: 'total_price',
        },
        notes: {
            type: DataTypes.STRING,
        },
        isClosed: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            field: 'is_closed',
        },
    },
    {
        schema: process.env.DB_SCHEMA,
        tableName: 'baskets',
        paranoid: true,
    })

module.exports = Basket