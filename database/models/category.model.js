const sequelize = require('../index')
const {DataTypes} = require('sequelize')

const Category = sequelize.define(
        'category',
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
        parentId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'parent_id',
        },
        lastChild: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            field: 'last_child'
        },
    },
    {
        schema: process.env.DB_SCHEMA,
        tableName: 'categories',
    })

module.exports = Category