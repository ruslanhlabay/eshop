const sequelize = require('../index')
const {DataTypes} = require('sequelize')

const User = sequelize.define(
    'user',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(150),
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            }
        },
        password: {
            type: DataTypes.STRING(64),
            allowNull: false,
        },
        firstName: {
            type: DataTypes.STRING(60),
            allowNull: false,
            validate: {
                len: [2, 60],
            },
            field: 'first_name',
        },
        lastName: {
            type: DataTypes.STRING(60),
            allowNull: false,
            validate: {
                len: [2, 60],
            },
            field: 'last_name',
        },
        phoneNumber: {
            type: DataTypes.STRING(20),
            allowNull: false,
            field: 'phone_number',
        },
        shippingData: {
           type: DataTypes.STRING,
           field: 'shipping_address',
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
            field: 'is_admin',
        },
    },
    {
        schema: process.env.DB_SCHEMA,
        tableName: 'users',
        paranoid: true,
    }
)

module.exports = User