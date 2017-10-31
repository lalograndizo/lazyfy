'use strict'

let express = require('express');
let bodyParser = require('body-parser');

let app = express();

// Cargar rutas
let user_routes=require('./routes/user')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//  Configurar cabecer http

//  Crear las rutas base
//  app.get('/pruebas',function(req, res){
//  res.status(200).send({message: 'Bienvenido al curso de desarrollo web'})
//  });

app.use('/api', user_routes);

module.exports = app;
