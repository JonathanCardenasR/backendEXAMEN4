import { Router } from "express";
import { health,grabarTipo} from "./api.controller.js";

const router = Router();

router.get('/', health);
router.post('/', grabarTipo);


export default router;