const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');

const PUERTO = process.env.PORT || 3000;

let pintoresRouter = require('./routes/pintor')

const app = express();
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));

app.use('/', pintoresRouter);

//error
.then(()=>{
    console.log('conexion establecida')
})
.catch(err=> console.log(err));

app.listen(PUERTO, ()=>{
    console.log('escuchando el puerto');
});