import { AnswerFolder } from "../models/folder.js";

export const createFolder = async (req, res) => {
    let body = req.body;
    let {topic} = req.params
    body.topic_id = topic;
    let folder = await AnswerFolder.create(body);
    res.send(folder)
}

export const getFolder = async (req, res) => {
    let { folder, topic } = req.params;
    let reqFolder = await AnswerFolder.findOne({ where: { id: folder, topic_id: topic } });
    res.send(reqFolder);
}

export const getFolders = async (req, res) => {
    let { topic } = req.params;
    let reqFolders = await AnswerFolder.findOne({ where: { topic_id: topic } });
    res.send(reqFolders);
}

export const updateFolder = async (req, res) => {
    let body = req.body;
    let { topic, folder } = req.params;
    let updated = await AnswerFolder.update(body, { where: { id: folder, topic_id: topic } })
    res.send(updated)
}

export const deleteFolder = async (req, res) => {
    let body = req.body;
    let { topic, folder } = req.params;
    await AnswerFolder.destroy({ where: { id: folder, topic_id: topic } })
    res.send({ message: "Folder deleted." })
}

