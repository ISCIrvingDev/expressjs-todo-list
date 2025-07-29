module.exports = models => {
  const router = require('express').Router(),
    crud = require(`${__dirname}/crud.service.js`);

  // router
  //     .get('/', (req, res, next) => res.end('666'))
  //     ;

  require(`${__dirname}/healt.controller.js`)(router);
  require(`${__dirname}/task.controller.js`)(crud, models.task, router);

  return router;
};