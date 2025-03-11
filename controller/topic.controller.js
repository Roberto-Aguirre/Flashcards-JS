import { Topic } from "../models/topic.js";

export const createTopic = async (req, res) => {
    let body = req.body;
    let topic = await Topic.create(body);
    res.send(topic);
}

export const getTopic = async (req, res) => {
    let { id } = req.params;
    res.send(await Topic.findByPk(id))
}

export const getTopics = async (req, res) => {
    res.send(await Topic.findAll())
}

export const updateTopic = async (req, res) => {
    let { id } = req.params;
    let body = req.body;
    let topic = await Topic.update(body, { where: { id } });
    res.send(topic);
}

export const deleteTopic = async (req, res) => {
    let { id } = req.params;
    let topic = await Topic.destroy({ where: { id } });
    res.send({ message: "Topic deleted." })
}

