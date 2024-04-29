"use strict";

import express from 'express';

const port = 5000;
const app = express();

let card_list = [];

app.use(express.json());

app.get('/cards', (req, res)=>{
    if(card_list.length === 0) {
        res.send('No hay cartas');
    } else {
        res.json(card_list);
    }
});

app.get('/cards/:id', (req, res)=>{
    const id = req.params.id;
    const card = card_list.find(card => card.id === id);

    if(card) {
        res.json(card);
    } else {
        res.send('La carta no se encontro.');
    }
});

app.post('/cards', (req, res) => {
    const newCards = req.body;
    const input = [];

    newCards.forEach(newCard => {
        if (!newCard.id || !newCard.data) {
            input.push({ id: newCard.id, message: 'Datos incompletos' });
        } else if (card_list.find(card => card.id === newCard.id)) {
            input.push({ id: newCard.id, message: 'La carta ya existe' });
        } else {
            card_list.push(newCard);
            input.push({ id: newCard.id, message: 'Carta creada correctamente' });
        }
    });

    res.json(input);
});

app.delete('/cards/:id', (req, res) => {
    const cardI = card_list.findIndex(card => card.id === req.params.id);
    if(cardI === -1) {
        res.status(404).json({ message : 'Carta no encontrada' });
    } else {
        card_list.splice(cardI, 1);
        res.json({ message : 'Carta eliminada correctamente' });
    }
});

app.put('/cards/:id', (req, res) => {
    const id = req.params.id;
    const updateCard = req.body;
    let cardI = card_list.findIndex(card => card.id === id);

    if (cardI !== -1) {
        card_list[cardI] = updateCard;
        res.json({ message: 'Carta actualizada correctamente', card: updateCard });
    } else {
        res.status(404).json({ message: 'Carta no encontrada' });
    }
});


app.listen(port, ()=>{
    console.log(`Running on port ${port}`);
});
