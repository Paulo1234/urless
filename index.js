const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./routes')
const bodyParser = require('body-parser')

const url = require('./models/url')

app.use(express.static(__dirname + "/public"))

app.use(bodyParser.json())

app.use(cors({
    origin: process.env.HOST || 'http://localhost:3000'
}))


url.sync().then(() => {   
    console.log('Synced database')
}).catch((err) => {
    console.log("Failed to sync database: " + err.message)
})

app.use(routes)

app.listen(3000, () => console.log('Running...'))