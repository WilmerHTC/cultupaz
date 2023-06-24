import { Router } from "express";
import {
  verSolicitud,
  aceptarSolicitud,
  nuevaSolicitud,
  verSugerencias,
  registroSugerencia
} from "../controllers/admin/solicitudes.admin.controllers.js";
const router = Router();

router.get("/verSolicitud", verSolicitud);
router.put("/aceptarSolicitud/:id", aceptarSolicitud);
router.get("/newSolicitud", nuevaSolicitud);

router.get("/verSugerencias", verSugerencias);
router.post("/registroSugerencia", registroSugerencia);

export default router;
