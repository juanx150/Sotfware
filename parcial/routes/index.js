const express = require('express');
//puerto de conexion
const app = express();
const port = process.env.port || 3000;
const userRoute = require("./routes/user");
//COnstantes de configuracion de conexion con la base de datos
const mongoose =require('mongoose');
require("dotenv").config();

//Prueba de conexion por el puerto indicado
app.listen(port,()=>console.log('Listening por el puerto',port))
//localhost:3000/
app.get('/',(req,res)=>res.send('Bienvenido a parcial'))

//Metodo de conexion con la base de datos
mongoose 
    .connect(process.env.MONGODB_URI)
    .then( ()=> console.log('Conectados con mongoDB Atlas'))
    .catch((error) => console.log(error))

//Middleware: URI de conexion para probar los request(GET;POST;DELETE;PUT)    
app.use(express.json())
//localhost:3000/api/users
app.use('/api',userRoute)
//puerto de activacion del servicio
app.listen(port,()=>console.log('Server listening to',port));

//middlewares
app.use(express.json());
app.use("/api",userRoute);

//Rutas del proyectos
app.get("/",(req,res)=>{
    res.send("Welcome to my API");
});

const execute_app = express()
require('dotenv').config()

execute_app.listen(port,()=>console.log('listening the port',port))

execute_app.get('/',(req,res)=>res.send('Parcial'))
//conexion con mongoDB
mongoose
     .connect(process.env.MONGODB_CONNECTION_STRING)
     .then(()=>console.log('Connect with mongodb'))
     .catch((error)=>console.error(error))