import * as express from "express";
const myModel = require("./models");
const a = express();
a.use(express.json())

interface Post {
    message: string;
    id: number;
    name: string;
    body: any;
};

interface pID {
    id: number;
    body: any;
}

a.get('/getMessage', async (req : pID, res : any) => {
    let mID: number = req.body.id;
    try {
        let message: Post = await myModel.find(
            {'id' : mID},
        );
        res.status(200).send(message);
    } catch (err) {
        res.status(404).send(err.message);
    }
});

a.post('/postMessage', async (req : Post, res : any) => {
    let post: Post = req.body;
    let message = new myModel(post); 
    try {        
        // let oldPost : Post = await myModel.find(
        //     {'id' : message.id}
        // )
        // if (oldPost) {
        //     return;
        // }
        await message.save();
        res.status(200).send("Message successfuly posted");
    } catch (err) {
        res.status(400).send(err.message);
    }
});


a.put('/putMessage', async(req : Post, res : any) => {
    let post: Post = req.body;
    let message = new myModel(post);
    try {
        await myModel.findOneAndUpdate(
            { 'id' : message.id },
             { 'message': message.message },
          )
          res.status(200).send("Message successfuly updated");
        
    } catch (err) {
        res.status(400).send(err.message);
    }
});

a.delete('/deleteMessage', async(req: pID, res : any) => {
    try {
        await myModel.findOneAndDelete(
            { 'id' :req.body.id },
          );
          res.status(200).send("Message successfuly deleted");
        
    } catch (err) {
        res.status(400).send(err.message);
    }    
});

module.exports = a;