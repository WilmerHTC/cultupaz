import { Router } from "express";
import {
  resgitroUsuarios,
  loginUsuarios,
} from "../controllers/registrosContoller.js";

const router = Router();

router.post("/registroUsuarios", resgitroUsuarios);
router.post("/loginUsuarios", loginUsuarios);

export default router;
