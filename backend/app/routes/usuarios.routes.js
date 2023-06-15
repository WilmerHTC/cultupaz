import { Router } from "express";
import { 
    verAprendices, 
    verGestores, 
    verAprendiz,
    updateUsuarios,
    totalUsuarios,
    inactivarUsuario,
    activarUsuario
} from "../controllers/admin/usuariosController.js";

const router = Router();

router.get("/verAprendices", verAprendices);
router.get("/verGestores", verGestores);
router.get("/verAprendiz/:id", verAprendiz);
router.put("/actualizarAprendiz/:id", updateUsuarios);
router.get("/totalUsuarios", totalUsuarios);
router.put("/inactivarUsuario/:id",  inactivarUsuario);
router.put("/activarUsuario/:id",  activarUsuario);

export default router;