const { DataTypes } = require('sequelize')
const sequelize = require('../index')

const Product = sequelize.define(
    'product',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true,
            validate: {
                len: [5, 100],
            }
        },
        SKU: {
            type: DataTypes.STRING(32),
            allowNull: false,
        },
        categoryId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'category_id',
        },
        brandId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'brand_id',
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: 0,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        schema: process.env.DB_SCHEMA,
        tableName: 'products',
        paranoid: true,
    }
)

module.exports = Product