import * as mongoose from 'mongoose';
const Router = require("./routes");
const express = require('express');

const port: number = 3000;
const app =  express();
const uri: string = 'mongodb+srv://aayush:patcheyz@cluster0.qi1b49n.mongodb.net/testDB?retryWrites=true&w=majority';

app.use(express.json());

mongoose.connect(uri);
const db: mongoose.Connection = mongoose.connection;
// if(db == null) {
//     console.log('it broke');
// }
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
app.use(Router);
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});