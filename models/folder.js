import { DataTypes } from 'sequelize';
import { sequelize } from "../database/sequelize-config.js";
import { Topic } from './topic.js';
import { FlashCard } from './flashcard.js';

const AnswerFolder = sequelize.define("AnswerFolder", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING }
},
    { tableName: "answer_folders" });

Topic.hasMany(AnswerFolder, { foreignKey: "topic_id", sourceKey: "id" })
AnswerFolder.hasMany(FlashCard, {foreignKey:"folder_id",sourceKey:"id"})
FlashCard.belongsTo(AnswerFolder, { foreignKey: "folder_id" });
// AnswerFolder.hasMany(FlashCard,{foreignKey:"folder_id",sourceKey:"id"})
export { AnswerFolder }

// materia a materia-folder, materia-folder a preguntas.