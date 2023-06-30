import { Juego } from "./models/juego.js";
import { Plataforma } from "./models/plataforma.model.js";

export const health = async (req, res) => {
    try {

        return res.status(200).json("Todo esta ok");
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Error al obtener los datos de Reniec desde el back'});
    }
}


export const getPlataformas = async (req, res) => {
    try {

        const plataformas = await Plataforma.findAll({});
        
        return res.status(200).json(plataformas);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Error al obtener los datos de Reniec desde el back'});
    }
}

export const registrarJuego = async (req, res) => {
    try {

        const nombreJuego = req.body.nombreJuego;
        const pkPlataforma = req.body.pkPlataforma;

        if(nombreJuego == null || nombreJuego == undefined || nombreJuego == '') return res.status(400).json({ message: 'El nombre del juego es obligatorio'});
        if(pkPlataforma == null || pkPlataforma == undefined || pkPlataforma == '') return res.status(400).json({ message: 'La plataforma es obligatoria'});

        const juego = await Juego.create({
            nombre_juego: nombreJuego,
            FK_plataforma: pkPlataforma
        })

        return res.status(200).json(juego);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Error al obtener los datos de Migraciones desde el back'});
    }
}

export const getReporteJuegos = async (req, res) => {
    try {

        const plataformas = await Plataforma.findAll({include:[ {model: Juego, as: "juego" }]});

        const listaPlataformas = [];

        for (const plataforma of plataformas) {
            listaPlataformas.push({
              nombrePlataforma: plataforma.nombre_plataforma,
              cantJuegos: plataforma.juego.length
            });
        }

        return res.status(200).json(listaPlataformas);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Error al obtener los datos de Migraciones desde el back'});
    }
}

