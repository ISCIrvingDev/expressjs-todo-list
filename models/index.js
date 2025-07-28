module.exports = mongoose => {
    return {
        task: require(`${__dirname}/TaskModel.js`) (mongoose)
    };
};