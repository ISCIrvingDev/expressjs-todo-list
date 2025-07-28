const app = require(`${__dirname}/app.js`);

app.listen(app.get('port'), () => console.log(`Servidor corriendo en el puero ${app.get('port')}`));