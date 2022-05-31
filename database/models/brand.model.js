const sequelize = require('../index')
const {DataTypes} = require('sequelize')

const Brand = sequelize.define(
        'brand',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        logo: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        schema: process.env.DB_SCHEMA,
        tableName: 'brands',
    })

module.exports = Brand