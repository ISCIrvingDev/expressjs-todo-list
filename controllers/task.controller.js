module.exports = (crud, model, router) => {
  const route = 'api/task';

  router
    .get(`/${route}`, async (req, res/*, next*/) => {
      try {
        const data = await crud.readAll(model, req.query)

        return res.json({
          success: true,
          data
        })
      } catch (error) {
        console.error('Error - "Task Controller - Get All Tasks": ', error)

        return res.json({
          success: false,
          data: error
        })
      }
    })

    .get(`/${route}/:_id`, async (req, res, /*, next*/) => {
      try {
        // req.params = { _id: '1' }
        const id = req.params._id

        const data = await crud.read(model, id)

        return res.json({
          success: true,
          data
        })
      } catch (error) {
        console.error('Error - "Task Controller - Get Task By ID": ', error)

        return res.json({
          success: false,
          data: error
        })
      }
    })

    .post(`/${route}`, async (req, res/*, next*/) => {
      try {
        const data = await crud.create(model, req.body)

        return res.json({
          success: true,
          data
        })
      } catch (error) {
        console.error('Error - "Task Controller - Create Task": ', error)

        return res.json({
          success: false,
          data: error
        })
      }
    })

    .put(`/${route}/:_id`, async (req, res/*, next*/) => {
      try {
        const data = await crud.update(model, req.params._id, req.body)

        return res.json({
          success: true,
          data
        })
      } catch (error) {
        console.error('Error - "Task Controller - Update Task": ', error)

        return res.json({
          success: false,
          data: error
        })
      }
    })

    .delete(`/${route}/:_id`, async (req, res/*, next*/) => {
      try {
        const data = await crud.disable(model, req.params._id)

        return res.json({
          success: true,
          data
        })
      } catch (error) {
        console.error('Error - "Task Controller - Delete Task": ', error)

        return res.json({
          success: false,
          data: error
        })
      }
    })
    ;
}