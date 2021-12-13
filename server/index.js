// importing required modules
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// importing functions to do CRUD operations
const readUserDetails = require("./controllers/read");
const createUser = require("./controllers/create");
const updateUser = require("./controllers/update");
const deleteUser = require("./controllers/delete");

const app = express();

app.use(bodyParser.json());
app.use(cors());

// connecting with MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/mern")
    .then(() => console.log("Connected to MongoDB."))
    .catch((err) => console.log("An error occurred while connecting to MongoDB:\n" + err));

// read api
app.get("/users/:username", async (req, res) => {
    const data = await readUserDetails(req.params.username);
    res.json(JSON.stringify(data));
    console.log(data);
});

// create api
app.post("/users", async (req, res) => {
    const data = await createUser(req.body);
    res.send(data);
    console.log(data);
});

// update api
app.put("/users", async (req, res) => {
    const data = await updateUser(req.body);
    res.send(data);
    console.log(data);
});

// delete api
app.delete("/users/:username", async (req, res) => {
    const data = await deleteUser(req.params.username);
    res.send(data);
    console.log(data);
});

// running server on port no. 5000
app.listen(5000, () => {
    console.log("Server is running on port 5000.");
});