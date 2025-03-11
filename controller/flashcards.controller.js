import { FlashCard } from "../models/flashcard.js"

export const createFlashCards = async (req, res) => {
    let flashcards = req.body;
    let { folder } = req.params;
    flashcards.forEach(async element => {
        element.folder_id = folder
        await FlashCard.create(element)
    });
    res.send({ message: "Flashcards addeded." })
}

export const getFlashCards = async (req, res) => {
    let {folder} = req.params
    res.send(await FlashCard.findAll({ where: {folder_id:folder} }))
}

export const updateFlashCard = async (req, res) => {
    let flashcards = req.body;
    console.log(flashcards);
    res.send({ message: "Flashcards added." })
}

export const deleteFlashCard = async (req, res) => {
    let flashcards = req.body;
    console.log(flashcards);
    res.send({ message: "Flashcards added." })
}

