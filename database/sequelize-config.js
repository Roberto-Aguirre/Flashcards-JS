import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
    { database: "flashcards_study", 
        dialect: "mysql", host: "localhost", 
        port: "3306", username: "root", 
        password: "Ilike2pizza@" });

