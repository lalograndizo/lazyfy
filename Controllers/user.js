'use strict'

var bcrypt = require('bcrypt-nodejs'); //encripta contraseñas
var User = require('../models/user'); // carga el modelo de USer

  //  acción del controlador
function prueba (req, res) {
  res.status(200).send({
    message: 'Probando una acción del controlador de usuarios'
  })
}

function saveUser(req, res)
{
  var user = new User();

  var params = req.body; // todos los datos que llegan por post como params.name, params.surname, etc.

  console.log(params);

  // recibe los parametros en la variable
  user.name = params.name;
  user.surname = params.surname;
  user.email = params.email;
  user.role = 'ROLE_USER';
  user.image = 'null';

  // guarda en base de datos la información
  if (params.password){

      bcrypt.hash(params.password, null, null, function (err, hash){
      user.password = hash;
      if (user.name != null && user.surname != null && user.email != null){
        // Guardar el usuario
        user.save((err, userStored) =>{
          if (err){
              res.status(500).send({message: 'Error al guardar usuario'});
          }else{
              if (!userStored) res.status(404).send({message: 'No se ha registrado el usuario'});
              else res.status(200).send({user: userStored});
          }
        });
      } else {
        res.status(200).send({message: 'Introduce todos los campos'});
      }
    });

    // encripta contraseña y guardala
  } else {
    res.status(200).send({message: 'Introduce la contraseña'});
  }
}



module.exports = {
  prueba,
  saveUser
}
