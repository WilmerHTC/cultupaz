import { Router } from "express";
import {
  resgitroUsuarios,
  loginUsuarios,
} from "../controllers/registrosContoller.js";
import multer from "multer";
import { storage } from "../middleware/cloudinary.js";

const upload = multer({
  storage: storage,
});
const router = Router();

const input = upload.fields([{ name: "foto" }]);

router.post("/registroUsuarios",input, resgitroUsuarios);
router.post("/loginUsuarios", loginUsuarios);

export default router;
