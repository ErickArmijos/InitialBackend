const express = require('express');
require('dotenv').config();
const sequelize = require('./Database/db_orm');
const Clientes = require('./Models/clientes.models');
const indexRoute = require("./Routes/index.routes")

// SERVER CONFIGURATIONS
const app = express();
app.use(express.json());
  // Middleware 
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT,()=>{
    console.log("Sevidor corriendo")
})

app.get("/",(req,res)=>{
    res.json({message:"Conexión correcta"})
})



// Conexión y sincronización de los modelos
sequelize.sync()
  .then(() => {
    console.log('Modelos sincronizados con la base de datos');
  })
  .catch(err => {
    console.error('Error al sincronizar modelos', err);
  });

app.use(indexRoute)