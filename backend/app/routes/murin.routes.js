import { Router } from "express";
import {
  registroPublicacion,
  verPublicaciones,
  eliminarPublicacion,
  editarPublicacion,
} from "../controllers/muroController.js";

const router = Router();

// Middleware para verificar si el id es válido
const validarIdMiddleware = (req, res, next) => {
  const idMuro = req.params.idMuro;
  if (!/^\d+$/.test(idMuro)) {
    return res.status(400).json({ message: "El id no es válido" });
  }
  next();
};

router.post("/publicacion", registroPublicacion);
router.get("/verPublicaciones", verPublicaciones);
router.delete("/eliminarPublicacion/:idMuro", validarIdMiddleware, eliminarPublicacion);
router.put("/editarPublicacion/:idMuro", validarIdMiddleware, editarPublicacion);

export default router;
