import { Router } from "express";
import {
  verSolicitud,
  aceptarSolicitud,
  nuevaSolicitud,
} from "../controllers/admin/solicitudes.admin.controllers.js";
const router = Router();

router.get("/verSolicitud", verSolicitud);
router.put("/aceptarSolicitud/:id", aceptarSolicitud);
router.get("/newSolicitud", nuevaSolicitud);

export default router;
