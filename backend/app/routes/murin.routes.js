import { Router } from "express";
import {
    registroPublicacion, 
    verPublicaciones,
} from "../controllers/muroController.js";
const router = Router();


router.post("/publicacion",registroPublicacion);
router.get("/verPublicaciones", verPublicaciones);



export default router;