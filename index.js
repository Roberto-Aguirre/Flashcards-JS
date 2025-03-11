import { sequelize } from "./database/sequelize-config.js";
import "./models/topic.js";
import "./models/folder.js";
import "./models/flashcard.js";

import express from "express";
import flashCardRouter from "./routes/flashcards.routes.js";
import folderRouter from "./routes/folder.routes.js";
import topicRouter from "./routes/topic.routes.js";

const app = express();
app.use(express.json())
app.use(flashCardRouter)
app.use(folderRouter)
app.use(topicRouter)

sequelize.authenticate().then(async ()=>{
    console.log("Database authenticate");
    await sequelize.sync({ logging: true, force: false });
    app.listen(3000,()=>{
        console.log('Listening at http://localhost:3000');
    })
    
})


