import express from "express";
import cors from "cors";

import userService from "./models/user-services.js";
import "./db.js";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.get("/users", async (req, res) => {
    try {
        const users = await userService.getUsers(req.query.name, req.query.job);
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get("/users/:id", async (req, res) => {
    try {
        const user = await userService.getUserById(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found" });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post("/users", async (req, res) => {
    try {
        const newUser = await userService.addUser(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete("/users/:id", async (req, res) => {
    try {
        const deletedUser = await userService.deleteUserById(req.params.id);
        if (!deletedUser) return res.status(404).json({ message: "User not found" });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

