'use strict'

let express = require('express')
let bodyParser = require('body-parser')
const cors = require('cors')
const os = require('os')

let app = express()

// Cargar rutas
let user_routes = require('./routes/user')
let artist_routes = require('./routes/artist')
let album_routes = require('./routes/album')
let song_routes = require('./routes/song')

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/uploads', express.static(os.tmpdir()))
app.use('/api', user_routes)
app.use('/api', artist_routes)
app.use('/api', album_routes)
app.use('/api', song_routes)

module.exports = app
//  Configurar cabecer http

//  Crear las rutas base
//  app.get('/pruebas',function(req, res){
//  res.status(200).send({message: 'Bienvenido al curso de desarrollo web'})
//  });
