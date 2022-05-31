const sequelize = require('../index')
const {DataTypes} = require('sequelize')

const CategoryBrand = sequelize.define(
    'categoryBrand',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
    },
    {
        schema: process.env.DB_SCHEMA,
        tableName: 'category_brands',
        timestamps: false,
    }
)

module.exports = CategoryBrand