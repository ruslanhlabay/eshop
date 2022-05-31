const sequelize = require('../index')
const {DataTypes} = require('sequelize')

const AttributesSet = sequelize.define(
        'attributesSet',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        categoryId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'category_id',
        },
        attributeId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'attribute_id',
        },
    },
    {
        schema: process.env.DB_SCHEMA,
        tableName: 'attributes_sets',
    })

module.exports = AttributesSet