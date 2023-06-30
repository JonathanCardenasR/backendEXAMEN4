import { Juego } from "./juego.js"
import { Plataforma } from "./plataforma.model.js"

Juego.belongsTo(Plataforma, { as: 'plataforma', foreignKey: 'FK_plataforma' })
Plataforma.hasMany(Juego, { as: 'juego', foreignKey: 'FK_plataforma' })
