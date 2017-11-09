'use strict'

let express = require('express')
let albumController = require('../controllers/artist')

let api = express.Router()

api.post('/albums', albumController.create)
api.get('/albums/:id?', albumController.read)
api.put('/albums/:id', albumController.update)
api.delete('/albums/:id', albumController.destroy)

module.exports = api
