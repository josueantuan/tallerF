//Require modulos
const cors = require('cors');
const express = require('express');
const taskRoute =require('./Routes/registro');
const path = require('path');
//Inicializar
const app = express();
//Configuraciones
app.set('port',process.env.PORT || 3000);
app.engine('html',require('ejs').renderFile);
app.set('view engine', 'ejs');
//Middlewares (funciones que se ejecutan anates de recibir informacion del navegador o clientes) 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}));
//Static files 
app.use(express.static(path.join(__dirname,'./dist/registros')));
//Routes
app.use('/api',taskRoute);
//Start server -- Puerto
app.listen(app.get('port'), ()=>{
    console.log('server on port',app.get('port'));
});