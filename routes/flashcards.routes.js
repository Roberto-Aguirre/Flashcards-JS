import { Router } from "express";
import { createFlashCards, deleteFlashCard, getFlashCards, updateFlashCard } from "../controller/flashcards.controller.js";


const flashcards = Router();

flashcards.get("/folder/:folder/flashcards", getFlashCards);
flashcards.post("/folder/:folder/flashcards", createFlashCards);
flashcards.put("/folder/:folder/flashcard/:id", updateFlashCard);
flashcards.delete("/folder/:folder/flashcard/:id", deleteFlashCard);

export default flashcards;