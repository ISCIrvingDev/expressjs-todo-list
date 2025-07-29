module.exports = (router) => {
  const route = 'api/check-healt';

  router
    .get(`/${route}`, (req, res, next) => res.json({
      success: true,
      data: 'success'
    }))
    ;
}