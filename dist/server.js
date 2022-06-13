"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const app = require('./index');
const port = 3000;
const DATABASE_URI = 'mongodb+srv://aayush:patcheyz@cluster0.qi1b49n.mongodb.net/testDB?retryWrites=true&w=majority';
mongoose.connect(DATABASE_URI);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});
const server = app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
module.exports = server;
