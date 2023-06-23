import { Router } from "express";
import { registroTarea, mostrarTareas } from '../controllers/murin.controllers copy.js';

const routers = Router();

routers.post("/aprendiz/tarea", registroTarea);
routers.get("/aprendiz/tarea", mostrarTareas);

export default routers;
