import { DataTypes } from 'sequelize';
import { sequelize } from "../database/sequelize-config.js";


const Topic = sequelize.define("Topic", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING }
},
    { tableName: "topics" });

export { Topic }
// materia a materia-folder, materia-folder a preguntas.