import { Model, DataTypes } from "sequelize"
import { sequelize } from '../database/database.js'

export class Juego extends Model {
}

Juego.init(
    {
        PK_juego: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre_juego: {
            type: DataTypes.STRING,
        },
        tsp_fec_creacion: {
            type: DataTypes.DATE,
        },
        tsp_fec_modificacion: {
            type: DataTypes.DATE,
        }
    },
    {
        sequelize,
        modelName: 'juego',
        freezeTableName : true,
        timestamps: true,
        createdAt: 'tsp_fec_creacion',
        updatedAt: 'tsp_fec_modificacion'
    }
);