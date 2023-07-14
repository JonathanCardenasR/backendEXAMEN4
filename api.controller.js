import Sequelize from 'sequelize';

export const health = async (req, res) => {
    try {

        return res.status(200).json("Todo esta ok");
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Error al obtener los datos de Reniec desde el back'});
    }
}

export const grabarTipo = async (req, res) => {
    try {

        const {tipo,fecha} = req.body;
        
        const sequelize = new Sequelize('exam4', 'admin', '.1adminSQL1.', { host: '20.1.2.234', dialect: 'mysql'});

        await sequelize.query(`INSERT TO votacion(tipo,fecha) VALUES (${tipo} ,${fecha})`);

        return res.status(200).json("Todo esta ok");
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Error al obtener los datos de Reniec desde el back'});
    }
}



