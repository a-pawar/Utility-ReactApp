const express = require("express");
const todoRoutes = require("./todoRoutes");
const cors = require("cors");
const bodyParser = require('body-parser');

const server = express();
server.listen(4100);
server.use(cors());
// Middleware to parse JSON in the request body
server.use(bodyParser.json());
server.use("/api/todos/", todoRoutes.router);

server.get("/", (req, res) => {
    res.send("Welcome to Utility api");
});
console.log("Server is listening at 4100");