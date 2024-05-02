import express from "express";
const queriesRouter = express.Router();

queriesRouter.get('/', async (req, res) => {
    res.status(200).send("GET called");
});

queriesRouter.post('/', async (req, res) => {
    res.status(200).send("POST called");
});

export default queriesRouter;