import express from "express";
const usersRouter = express.Router();

usersRouter.get('/', async (req, res) => {
    res.status(200).send("GET called");
});

usersRouter.post('/', async (req, res) => {
    res.status(200).send("POST called");
});

export default usersRouter;