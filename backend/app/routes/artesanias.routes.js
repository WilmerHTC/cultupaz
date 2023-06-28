import { Router } from "express";

import {
  crearArtesania,
  verMisArtesanias,
  artesaniasFound,
  verArtesanias,
  actualizarArtesania,
  eliminarArtesania,
} from "../controllers/artesanias.controllers.js";

import multer from "multer";
import { storage } from "../middleware/cloudinary.js";

const upload = multer({
  storage: storage,
});

const router = Router();

const input = upload.fields([{ name: "imgArtesania" }]);
router.post("/artesanias", input, crearArtesania);
router.get("/artesanias", artesaniasFound);
router.get("/artesanias/:id", verMisArtesanias);
// Ruta para actualizar una artesanía
router.put('/artesania/:id',input, actualizarArtesania);

// Ruta para eliminar una artesanía
router.delete("/artesanias/:id", eliminarArtesania);
router.get("/artesania/:id", verArtesanias);

export default router;
