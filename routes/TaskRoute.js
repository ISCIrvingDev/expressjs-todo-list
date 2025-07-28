module.exports = (crud, model, router) => {
    const route = 'Task';

    router
        .get(`/${route}`, (req, res, next) => crud.readAll(model, req.query, result => res.json(result)))
        .get(`/${route}/:_id`, (req, res, next) => crud.read(model, req.params, result => res.json(result)))
        .post(`/${route}`, (req, res, next) => crud.create(model, req.body, result => res.json(result)))
        .put(`/${route}`, (req, res, next) => crud.update(model, req.body, result => res.json(result)))
        .delete(`/${route}`, (req, res, next) => crud.disable(model, req.body, result => res.json(result)))
        ;
}