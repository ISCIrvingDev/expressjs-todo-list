module.exports = mongoose => {
  return {
    task: require(`${__dirname}/task.model.js`)(mongoose)
  };
};