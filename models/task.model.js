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
    active: {
      type: Boolean,
      default: true,
      select: false
    }
  }),
    Task = mongoose.model('Task', TaskSchema);// Nombre del schema en la BD: tasks
  // Task = mongoose.model('Task', TaskSchema, 'Task');// Nombre del schema en la BD: Task

  return Task;
};