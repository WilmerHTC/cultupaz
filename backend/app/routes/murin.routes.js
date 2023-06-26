import { Router } from "express";
import {
  registroPublicacion,
  verPublicaciones,
  eliminarPublicacion,
  editarPublicacion,
} from "../controllers/muroController.js";

const router = Router();

router.post("/publicacion", registroPublicacion);
router.get("/verPublicaciones", verPublicaciones);
router.delete("/eliminarPublicacion/:idMuro",  eliminarPublicacion);
router.put("/editarPublicacion/:idMuro",  editarPublicacion);

export default router;
