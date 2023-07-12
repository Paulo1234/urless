const express = require('express')
const router = express.Router()
const urlController = require('./controllers/urlController')

router.get('/', (req, res) => {
    return res.sendFile(__dirname + '/public/index.html')
})

router.get('/:shorten', urlController.read)

router.post('/create', urlController.create)

module.exports = router