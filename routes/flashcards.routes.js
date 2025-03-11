import { Router } from "express";


const flashcards = Router();

flashcards.get("/topic/:topic/folder/:folder/flashcards", getFlashCards);
flashcards.post("/topic/:topic/folder/:folder/flashcards", createFlashCards);
flashcards.put("/topic/:topic/folder/:folder/flashcard/:id", updateFlashCard);
flashcards.delete("/topic/:topic/folder/:folder/flashcard/:id", deleteFlashCard);

export default flashcards;