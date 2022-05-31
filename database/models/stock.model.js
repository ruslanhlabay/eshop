const sequelize = require('../index')
const {DataTypes} = require('sequelize')

const Stock = sequelize.define(
        'stock',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'product_id',
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
            validate: {
                isInt: true,
                min: 0,
            }
        },
    },
    {
        schema: process.env.DB_SCHEMA,
        tableName: 'stocks',
        paranoid: true,
    })

module.exports = Stock