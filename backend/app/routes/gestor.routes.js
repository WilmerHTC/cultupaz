import { Router } from "express";
import {enviarasistencia,verasistencia,crearevento,mostarevento} from '../controllers/GestorController.js'
const routers = Router();


routers.post("/gestor/acompanamiento",enviarasistencia);
routers.get("/gestor/acompanamiento", verasistencia);
routers.post("/gestor/evento",crearevento);
routers.get("/gestor/evento", mostarevento);


export default routers;