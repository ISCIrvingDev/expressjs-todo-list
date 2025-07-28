const express = require('express'),
    httpErrors = require('http-errors'),
    logger = require('morgan'),

    mongoose = require('mongoose'),
    db = require(`${__dirname}/db/conn`) (mongoose),
    models = require(`${__dirname}/models`) (mongoose),
    routes = require(`${__dirname}/routes`) (models),
    app = express()
    ;

app
    .set('port', (process.env.PORT || 3000))

    .use(express.static(`${__dirname}/public`))
    .use(express.json())
    .use(express.urlencoded({extended: false}))

    .use(logger('dev'))

        // Solamente para hacer pruebas con CORS en development
    .use((req, res, next) => {
        // res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Origin', 'http://localhost:8081');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        // res.header('Access-Control-Allow-Credentials', true);
        return next();
    })
    .use(routes)
    .use((req, res, next) => next(httpErrors(404)))
    .use((err, req, res, next) => {
        // console.log('El error ocurrido es: ', err);
        console.log('Ruta no encontrada');
        
        res.status(err.status || 500);
        return res.redirect('/');
        // res.status(err.status || 500);
        // res.render('error', {err});
    })
    ;

module.exports = app;