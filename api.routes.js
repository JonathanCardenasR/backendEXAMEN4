import { Router } from "express";
import { getPlataformas,registrarJuego,getReporteJuegos,health} from "./api.controller.js";

const router = Router();

router.get('/', health);
router.get('/getPlataformas', getPlataformas);
router.get('/getReporteJuegos', getReporteJuegos);
router.post('/registrarJuego', registrarJuego);


export default router;