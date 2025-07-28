module.exports = models => {
    const router = require('express').Router(),
        crud = require(`${__dirname}/CRUD.js`);
    
    // router
    //     .get('/', (req, res, next) => res.end('666'))
    //     ;

    require(`${__dirname}/TaskRoute.js`) (crud, models.task, router);
    
    return router;
};