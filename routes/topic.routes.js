import { Router } from "express";
import { createTopic, deleteTopic, getTopic, getTopics, updateTopic } from "../controller/topic.controller.js";

const topic = Router()

topic.get("/topic",getTopics)
topic.get("/topic/:id",getTopic)
topic.post("/topic",createTopic)
topic.put("/topic/:id",updateTopic)
topic.delete("/topic/:id",deleteTopic)

export default topic;