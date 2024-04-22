"use strict";

import express from 'express';

const port = 5000;
const app = express();

let card_list = [];

app.use(express.json());

app.get("/hello", (req, res)=>{
    const salute = "Hello from server";
    console.log(req.query);
    res.status(200).send(salute);
});

app.get("/hello/:name", (req, res)=>{
    console.log(req.params);
    const salute = `Hello ${req.params.name}!!`;
    res.status(200).send(salute);
});

app.post('/cards', (req, res)=>{
    console.log(req.body);
    card_list.push(req.body);
    res.status(200).send("Card added successfully");
})

app.listen(port, ()=>{
    console.log(`Running on port ${port}`);
});