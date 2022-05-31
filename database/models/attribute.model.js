const sequelize = require('../index')
const {DataTypes} = require('sequelize')

const Attribute = sequelize.define(
        'attribute',
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
        isPrimary: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            field: 'is_primary',
        },
    },
    {
        schema: process.env.DB_SCHEMA,
        tableName: 'attributes',
    })

module.exports = Attribute