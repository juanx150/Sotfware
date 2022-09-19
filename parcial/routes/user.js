const express = require('express')
const userSchema = require('../models/user')
const router = express.Router()
const bodyParser = require('body-parser')
const { application } = require('express')
const app=express()
const port= process.env.port || 3000
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Add fatucras nuevas
router.post('/users',(req,res)=>{
    const user = userSchema(req.body)
    user
       .save()
       .then((data)=>res.json(data))
       .catch((error)=>res.json({mesage:error}))
})

//Mostrar las listas de facturas entre otros
router.get('/users',(req,res)=>{
    userSchema
       .find()
       .then((data)=>res.json(data))
       .catch((error)=>res.json({message:error}))
})

//Consultar o buscar de informacion
router.get('/users/:id',(req,res)=>{
    const {id} = req.params
    userSchema
       .findById(id)
       .then((data)=>res.json(data))
       .catch((error)=>res.json({message:error}))
})


app.listen(port,()=>{
    console.log('API  REST compila en http://localhost:3000/api/users:${port}')
})


module.exports = router