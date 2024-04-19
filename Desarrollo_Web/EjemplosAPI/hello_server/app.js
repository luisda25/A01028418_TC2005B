"use strict";

import express from 'express';

const app = express();

app.get("/name", (req, res)=>{
    const salute = "Hello from server";
    res.status(200).send(salute);
});

app.get("/hello/:name", (req, res)=>{
    console.log(req.params);
    const salute = `Hello ${req.params.name}!!`;
    res.status(200).send(salute);
});

app.listen(3000, ()=>{
    console.log("Running on port 3000");
});