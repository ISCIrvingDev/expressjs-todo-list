const readAll = async (model, query) => {
  const res = await model.find({ active: true }).select(query.fields ? query.fields.join(' ') : '-__v');

  return res;
},
  read = async (model, id) => {
    const params = {
      _id: id,
      active: true
    }

    const res = await model.find(params).select('-__v');

    return res;
  },
  create = async (model, body) => {
    body.updatedAt = new Date();
    body.active = true;

    const newData = new model(body)

    const res = await newData.save();

    return res;
  },
  update = async (model, _id, body) => {
    body.updatedAt = new Date();

    const res = await model.findByIdAndUpdate(_id, body);

    return res;
  },
  disable = async (model, _id) => {
    const updatedDate = new Date();

    const res = await model.findByIdAndUpdate(_id, { active: false, updatedAt: updatedDate });

    return res;
  }
  ;

module.exports = {
  readAll: readAll,
  read: read,
  create: create,
  update: update,
  disable: disable
};