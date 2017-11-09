'use strict'

let express = require('express')
let songController = require('../controllers/song')

let api = express.Router()

api.post('/songs', songController.create)
api.get('/songs/:id?', songController.read)
api.put('/songs/:id', songController.update)
api.delete('/songs/:id', songController.destroy)

module.exports = api
