// DEPENDENCIES
const snacksController = require("./controllers/snackController");
const express = require("express");
const cors = require("cors");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(cors());

// ROUTES
app.use("/snacks", snacksController);
app.get("/", (request, response) => {
  response.send("Welcome to the snack app");
});

app.get("*", (request, response) => {
  response.status(404).send({ error: "Page Not Found" });
});
// EXPORT
module.exports = app;
