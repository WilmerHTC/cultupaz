import { Router } from "express";
import {
  registroEvento,
  mostrarEventos,
  mostrarMisEventos,
  updateEvento,
  eliminarEvento,
} from "../../controllers/gestor/gestorController.js";
import {
  registroAsistencia,
  mostrarAsistencia,
} from "../../controllers/gestor/gestorController.js";

const router = Router();

router.post("/crearEvento", registroEvento);
router.get("/mostrarEventos", mostrarEventos);
router.get("/mostrarMisEventos/:id", mostrarMisEventos);
router.put("/actualizarEvento/:idEvento", updateEvento);
router.delete("/eliminarEvento/:idEvento", eliminarEvento);

router.post("/crearAsistencia", registroAsistencia);
router.get("/mostrarAsistencia", mostrarAsistencia);

export default router;
