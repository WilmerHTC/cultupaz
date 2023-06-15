import express from "express";
import env from "dotenv";
import cors from "cors";
import multer from "multer";
import session from "express-session";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import morgan from "morgan";
// import {
//   enviarasistencia,
//   verasistencia,
//   crearevento,
//   mostarevento,
// } from "../controllers/GestorController.js";
import gestor from "../app/routes/gestor.routes.js";
// import Jwt from "jsonwebtoken";

import {
  getTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
} from "../app/controllers/murin.controllers copy.js";
// LLamo a mis rutas
// import GaleriaRouter from "./routes/artesanias.routes.js";
import dbconnection from "./database/dbConf.js";
// import uploadController from "./controllers/uploadController.js";
import getController from "../app/controllers/getController.js";
import path from "path";
//registrologin
import registrosApp from "../app/routes/registros.routes.js";
//verusuarios
import usuarios from "../app/routes/usuarios.routes.js";
//ver solicitudes
import solicitudes from "../app/routes/admin.routes.js";

// Mi app principal
const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
// Configurar node procesar datos registro de datos y login enviados dese un form.
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(
  session({
    secret: "secret",
    resave: "false",
    saveUninitialized: false,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

dbconnection.connect((error) => {
  if (error) {
    throw error;
  }
  console.log("Conectado a la base de datos Cultupaz");
});

// router.get("/api/get", getController);
// router.post("/api/endpoint", uploadController);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(registrosApp);
app.use(usuarios);
app.use(solicitudes);
app.use(gestor);
// SETEAMOS LAS VARIABLES DE ENTORNO.
env.config({ path: "./env/.env" });

app.use(express.static("guardar"));

// Ruta GET para obtener los datos
app.get("/api/get", getController);

// Ruta DELETE para eliminar los datos
app.delete("/api/endpoint", (req, res) => {
  // Aquí puedes realizar la lógica para eliminar los datos de tu base de datos

  // Realizar acciones necesarias, como eliminar de la base de datos

  console.log("Datos eliminados exitosamente");

  res.json({ message: "Datos eliminados exitosamente" });
});

// FINAL
app.get("/tasks", getTasks);
app.get("/tasks/:id", getTask);
app.post("/tasks", createTask);
app.put("/tasks/:id", updateTask);
app.delete("/tasks/:id", deleteTask);

app.get("/ping");

export default app;
