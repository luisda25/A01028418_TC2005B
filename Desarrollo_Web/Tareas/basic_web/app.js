"use strict";

import express from 'express';
import fs, { appendFile } from 'fs';

const port = 3000;
const app = express()

app.use(express.static('public'));

app.get("/", (req, res)=>{
    const file = fs.readFileSync("public/html/basic_page.html", "utf8");
    res.status(200).send(file);
});

app.listen(port, ()=>{
    console.log(`Running on port ${port}`);
});


