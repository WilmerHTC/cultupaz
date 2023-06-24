import { Router } from "express";

import {
  crearArtesania,
  verMisArtesanias,
  artesaniasFound
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

export default router;
