import { Model, DataTypes } from "sequelize"
import { sequelize } from '../database/database.js'

export class Plataforma extends Model {
}

Plataforma.init(
    {
        PK_plataforma: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre_plataforma: {
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
        modelName: 'plataforma',
        freezeTableName : true,
        timestamps: true,
        createdAt: 'tsp_fec_creacion',
        updatedAt: 'tsp_fec_modificacion'
    }
);