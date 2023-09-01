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
    nome: "Alice Gonçalves Silva",     
  });
  console.log("Rota / solicitada");
});

app.listen(port, () => {            
  console.log(`Serviço escutando na porta:  ${port}`);
});

import roteadorLogin from "./routes/login.js";

app.use(roteadorLogin);

app.use(express.urlencoded({ extended: true }));
