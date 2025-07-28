module.exports = mongoose => {
    const
        server = 'localhost',// Develoment
        // server = 'Server IP',// Production
        port = '27017'// Develoment
        // port = 'Server Port'// Production
        ;
    
        // Develoment
    // mongoose.connect(`mongodb://${server}:${port}/TaskDB`, {useNewUrlParser: true});
        // Production
    mongoose.connect(`mongodb+srv://ISCIrving:ZKql4kEDnEbhlCVJ@cluster0-ykmkl.mongodb.net/TaskDB?retryWrites=true`, {useNewUrlParser: true});
    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'Error al conectarse a la Base de Datos:'));
    db.once('open', () => console.log('Conexion a la Base de Datos Exitosa'));

    return db;
};