const sequelize = require('../index')
const {DataTypes} = require('sequelize')

const Order = sequelize.define(
        'order',
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
            allowNull: false,
            defaultValue: 0,
            field: 'total_price',
        },
        notes: {
            type: DataTypes.STRING,
        },
        status: {
            type: DataTypes.STRING,
            defaultValue: 'RECEIVED',
        },
        date: {
            type: DataTypes.TIME,
        }
    },
    {
        schema: process.env.DB_SCHEMA,
        tableName: 'orders',
        paranoid: true,
    })

module.exports = Order