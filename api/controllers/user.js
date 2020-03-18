'user strict'

var User = require('../models/user');

function home(req, res) {
      console.log(req.body);

      res.status(200).send({
            message: "prueba de users"
      });
}

function pruebas(req, res) {
      console.log(req.body);

      res.status(200).send({
            message: "prueba de pruebas de users"
      });
}

function saveUser(req, res) {
      var params = req.body();
      var user = new User();

      if (params.name && params.surname && params.nick && params.email && params.password) {
            user.name = params.name;
            user.surname = params.surname;
            user.nick = params.nick;
            user.email = params.email;
      } else {
            res.status(200).send({
                  message: "Envia todos los campos necesarios"
            })
      }


}

module.exports = {
      home,
      pruebas
}