module.exports = mongoose => {
    mongoose.set('debug', true);
    
    const TaskSchema = new mongoose.Schema({
            createdAt: {
                type: Date,
                default: new Date(),
                select: false
            },
            updatedAt: {
                type: Date,
                default: new Date(),
                select: false
            },
            task: String,
            description: String,
            done: {
                type: Boolean,
                default: false
            },
            state: {
                type: Boolean,
                default: true,
                select: false
            }
        }),
        Task = mongoose.model('Task', TaskSchema);// tasks
        // Task = mongoose.model('Task', TaskSchema, 'Task');// Task

    return Task;
};