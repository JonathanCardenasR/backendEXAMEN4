import Sequelize from "sequelize";

//export const sequelize = new Sequelize('postgres://postgres:postgres@192.168.18.5:5432/exam4')

export const sequelize = new Sequelize('exam4', 'admin', '.1adminSQL1.', { host: '20.1.2.234', dialect: mysql});