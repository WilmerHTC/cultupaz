import express from "express";
import cors from "cors";
import morgan from "morgan";
import dbconnection from "./database/dbConf.js";

import murin from "./routes/murin.routes.js";
// LLamo a mis rutas
import artesanias from "./routes/artesanias.routes.js";
//registrologin
import registrosApp from "../app/routes/registros.routes.js";
//verusuarios
import usuarios from "../app/routes/usuarios.routes.js";
//ver solicitudes
import solicitudes from "../app/routes/admin.routes.js";
///Gestor
import gestorEvento from "./routes/gestorRoutes/gestor.routes.js";
// Mi app principal

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

dbconnection.connect((error) => {
  if (error) {
    throw error;
  }
  console.log("Conectado a la base de datos Cultupaz");
});

app.use(registrosApp);
app.use(usuarios);
app.use(solicitudes);
app.use(gestorEvento);
app.use(murin);
app.use(artesanias);

export default app;
