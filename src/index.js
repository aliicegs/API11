import express from "express";      
const app = express();             
const port = 3000;                

import dotenv from "dotenv";
dotenv.config();

import roteadorUsuario from "./routes/usuario.js";

app.use(roteadorUsuario);

app.use(express.json());

app.get("/", (req, res) => {        
  res.json({
    message: "API para CRUD usuario: https://github.com/aliicegs/API11",
  });
});

app.listen(port, () => {            
  console.log(`Serviço escutando na porta:  ${port}`);
});