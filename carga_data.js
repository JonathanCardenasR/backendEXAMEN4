import { Plataforma } from "./models/plataforma.model.js";


const plataformas = [
    {
        'nombre_plataforma': 'Nintendo GameCube',
    },
    {
        'nombre_plataforma': 'Nintendo Wii',
    },
    {
        'nombre_plataforma': 'Nintendo Wii U',
    },
    {
        'nombre_plataforma': 'Nintendo Switch',
    },
    {
        'nombre_plataforma': 'Xbox',
    },
    {
        'nombre_plataforma': 'Xbox 360',
    },
    {
        'nombre_plataforma': 'Xbox One',
    },
    {
        'nombre_plataforma': 'Xbox Series X/S',
    },
    {
        'nombre_plataforma': 'PlayStation 1',
    },
    {
        'nombre_plataforma': 'PlayStation 2',
    },
    {
        'nombre_plataforma': 'PlayStation 3',
    },
    {
        'nombre_plataforma': 'PlayStation 4',
    },
    {
        'nombre_plataforma': 'PlayStation 5',
    },
    
]

const main = async () => {
    try {
        plataformas.forEach(async plataforma => {
            try {
                await Plataforma.create(plataforma)
            } catch (error) {
                console.log(error)
            }
        });
    } catch (error) {
        console.log(error)
    }    
}

main();