import express from "express";
const newsRouter = express.Router();

newsRouter.get('/', async (req, res) => {
    res.status(200).send("GET called");
});

newsRouter.post('/', async (req, res) => {
    res.status(200).send("POST called");
});

export default newsRouter;