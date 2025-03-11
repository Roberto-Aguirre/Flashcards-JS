import { DataTypes } from 'sequelize';
import { sequelize } from "../database/sequelize-config.js";

const FlashCard = sequelize.define("FlashCard", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    imageUrl: { type: DataTypes.STRING},
    question: {type:DataTypes.STRING},
    answer: {type:DataTypes.STRING}
},
{tableName:"flashcards"});

export {FlashCard}

// materia a materia-folder, materia-folder a preguntas.