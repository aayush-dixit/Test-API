import * as mongoose from 'mongoose';
const app = require('./index');

const port: number = 3000;
const uri: string = 'mongodb+srv://aayush:patcheyz@cluster0.qi1b49n.mongodb.net/testDB?retryWrites=true&w=majority';
mongoose.connect(uri);
const db: mongoose.Connection = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

const server = app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
module.exports = server;