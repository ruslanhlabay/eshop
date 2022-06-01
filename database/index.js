const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        // // uncomment this block to use heroku-postgresql connection
        // // dialectOptions: {
        //         ssl: {
        //                 require: true,
        //                 rejectUnauthorized: false
        //         }
        // },
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        schema: process.env.DB_SCHEMA,
        logging: console.log,
//            logging: (...msg) => console.log(msg)

    }
)


module.exports = sequelize
