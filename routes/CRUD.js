const readAll = (model, query, next) => {
        model.find({state: true}, (err, docs) => {
            if (err) throw err;
            
            return next(docs);
        }).select(query.fields ? query.fields.join(' ') : '-__v');
        // select('columna1 columna2')
        // select('-columna1 -columna2')
    },
    read = (model, params, next) => {
        params.state = true;

        model.find(params, (err, docs) => {
            if (err) throw err;
            
            return next(docs);
        }).select('-__v');
    },
    create = (model, body, next) => {
        body.updatedAt = new Date();
        body.state = true;

        new model (body).save((err, doc) => {
            if (err) throw err;
            
            return next(doc);
        });
    },
    update = (model, body, next) => {
        body.updatedAt = new Date();

        model.findByIdAndUpdate(body._id, body, (err, doc) => {
            if (err) throw err;

            return next('Your data has been updated correctly');// next(doc)
        });
    },
    disable = (model, body, next) => {
        body.updatedAt = new Date();
        
        model.findByIdAndUpdate(body._id, {state: false, updatedAt: body.updatedAt}, (err, doc) => {
            if (err) throw err;

            return next('Your data has been deleted correctly');// next(doc)
        });
    }
    ;

module.exports = {
    readAll: readAll,
    read: read,
    create: create,
    update: update,
    disable: disable
};