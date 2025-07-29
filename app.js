const express = require("express"),
  httpErrors = require("http-errors"),
  logger = require("morgan"),
  mongoose = require("mongoose"),
  db = require(`${__dirname}/db/conn`)(mongoose),
  models = require(`${__dirname}/models`)(mongoose),
  routes = require(`${__dirname}/controllers`)(models),
  app = express();

// * Variables de entorno
require("dotenv").config();

const domainCors = process.env.DOMAIN_CORS.split(',');

// * Configuracion de la App
app
  // * Puerto
  .set("port", process.env.PORT || 3000)

  // Comentar servidor estatico
  // .use(express.static(`${__dirname}/public`))

  // * Aceptar JSONs
  .use(express.json())
  .use(express.urlencoded({ extended: false }))

  // * Logs
  .use(logger("dev"))

  // CORS
  .use((req, res, next) => {
    const origin = req.headers.origin

    // res.header('Access-Control-Allow-Origin', '*'); // Solamente para hacer pruebas con CORS en development
    if (domainCors.includes(origin)) {
      res.setHeader('Access-Control-Allow-Origin', origin);
    }

    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    // res.header('Access-Control-Allow-Credentials', true);
    return next();
  })

  // * Controladores
  .use(routes)

  // * Manejo de errores
  .use((req, res, next) => next(httpErrors(404)))
  .use((err, req, res, next) => {
    // console.log('El error ocurrido es: ', err);
    console.log("Ruta no encontrada");

    res.status(err.status || 500);
    return res.json({
      success: false,
      data: `Ruta no encontrada: ${err}`
    });
    // return res.redirect("/");
    // res.status(err.status || 500);
    // res.render('error', {err});
  });

module.exports = app;
