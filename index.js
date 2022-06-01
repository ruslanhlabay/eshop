require('dotenv').config()
const express = require('express')
const sequelize = require('./database')

const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.get('/', (req, res) => {
    res.send('Welcome to simple eshop!')
})


const start = async () => {
    try {
        await sequelize.authenticate()
        console.log('Database connection OK!')
        await sequelize.sync()
        console.log('Database sync OK!')
    } catch (error) {
        console.error('Unable to connect to the database: ', error.message)
        process.exit(1);
    }
}

start()
    .then( ()=> {
            app.listen(PORT, () => console.log(`Server started on http://${process.env.DOMAIN}:${PORT}`))
        }
    )
    .catch( (error)=> {
        console.log('Server error -', error.message)
    })