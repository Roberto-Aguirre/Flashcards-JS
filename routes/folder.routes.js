import { Router } from "express";
import { createFolder, deleteFolder, getFolder, getFolders, updateFolder } from "../controller/folder.controller.js";

const folder = Router()

folder.get("/topic/:topic/folder/:folder", getFolder)
folder.get("/topic/:topic/folder", getFolders)
folder.post("/topic/:topic/folder", createFolder)
folder.put("/topic/:topic/folder/:folder", updateFolder)
folder.delete("/topic/:topic/folder/:folder", deleteFolder)

export default folder;