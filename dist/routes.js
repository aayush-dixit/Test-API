"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const myModel = require("./models");
const a = express();
a.use(express.json());
;
a.get('/getMessage', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let mID = req.body.id;
    try {
        let message = yield myModel.find({ 'id': mID });
        res.status(200).send(message);
    }
    catch (err) {
        res.status(404).send(err);
    }
}));
a.post('/postMessage', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let post = req.body;
    let message = new myModel(post);
    try {
        let oldPost = yield myModel.find({ 'id': message.id });
        if (oldPost) {
            return;
        }
        yield message.save();
        res.status(200).send("Message successfuly posted");
    }
    catch (err) {
        res.status(400).send(err);
    }
}));
a.put('/putMessage', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let post = req.body;
    let message = new myModel(post);
    try {
        yield myModel.findOneAndUpdate({ 'id': message.id }, { 'message': message.message });
        res.status(200).send("Message successfuly updated");
    }
    catch (err) {
        res.status(400).send(err.message);
    }
}));
a.delete('/deleteMessage', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield myModel.findOneAndDelete({ 'id': req.body.id });
        res.status(200).send("Message successfuly deleted");
    }
    catch (err) {
        res.status(400).send(err.message);
    }
}));
module.exports = a;
