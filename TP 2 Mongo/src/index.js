const express = require("express");
const app = express();
const router = require("./router/index.route.js");

app.use("/", router);

app.listen("8080", () => {
    console.log("Server running on port 8080");
});