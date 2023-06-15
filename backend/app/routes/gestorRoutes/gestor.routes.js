import { Router } from "express";
import {registroEvento, mostrarEventos} from "../../controllers/gestor/gestorController.js";
import {registroAsistencia , mostrarAsistencia} from "../../controllers/gestor/gestorController.js";
const router = Router();

router.post("/crearEvento", registroEvento);
router.get("/mostrarEventos", mostrarEventos);

////////
router.post("/crearAsistencia", registroAsistencia);
router.get("/mostrarAsistencia", mostrarAsistencia);

export default router;
