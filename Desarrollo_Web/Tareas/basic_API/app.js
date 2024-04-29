"use strict";

import express from 'express';

const port = 5000;
const app = express();

let card_list = [
    {
        id: '1',
        cardName: 'Carta 1',
        description: 'Descripcion de la carta 1',
        element: 'Tipo 1',
        passive: 'Habilidad pasiva 1',
        damage: 5
        
    },
    {
        id: '2',
        cardName: 'Carta 2',
        description: 'Descripcion de la carta 2',
        element: 'Tipo 2',
        passive: 'Habilidad pasiva 2',
        damage: 3
        
    }
];

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

app.post('/cards/post', (req, res) => {
    const newCards = req.body;
    const attributes = ['id', 'cardName', 'description', 'element', 'passive', 'damage'];

    for (let newCard of newCards) {
        for (let attribute of attributes) {
            if (!newCard.hasOwnProperty(attribute)) {
                return res.status(400).json({ message: 'No se encontraron los atributos necesarios.' });
            }
        }
        for (let card of card_list) {
            if (card.id === newCard.id) {
                return res.status(400).json({ message: 'No se pudo agregar la carta, ya existe en la lista.' });
            }
        }
        card_list.push(newCard);
    }
    res.status(200).json({ message: 'Las cartas se han agregado correctamente.' });
});

app.delete('/cards/delete/:id', (req, res) => {
    const cardI = card_list.findIndex(card => card.id === req.params.id);
    if(cardI === -1) {
        res.status(404).json({ message : 'La carta no se encontró en la lista.' });
    } else {
        card_list.splice(cardI, 1);
        res.json({ message : 'Carta eliminada correctamente' });
    }
});

app.put('/cards/update/:id', (req, res) => {
    const id = req.params.id;
    const updateAttributes = req.body;

    let cardI = card_list.findIndex(card => card.id === id);
    if (cardI === -1) {
        return res.status(404).json({ message: 'La carta no se encontró en la lista.' });
    }

    for (let attribute in updateAttributes) {
        card_list[cardI][attribute] = updateAttributes[attribute];
    }
    res.status(200).json({ message: 'La carta se ha actualizado correctamente.' });
});



app.listen(port, ()=>{
    console.log(`Running on port ${port}`);
});
