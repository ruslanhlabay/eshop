const sequelize = require('../index')
const {DataTypes} = require('sequelize')

const AttributeValue = sequelize.define(
    'attributeValue',
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
        attributeId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'attribute_id',
        },
        value: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        schema: process.env.DB_SCHEMA,
        tableName: 'attribute_values',
    })

module.exports = AttributeValue