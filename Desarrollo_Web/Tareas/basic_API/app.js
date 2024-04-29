"use strict";

import express from 'express';

const port = 5000;
const app = express();

let card_list = [
    {
        id: '1',
        data: {
            cardName: 'Carta 1',
            description: 'Descripcion de la carta 1',
            element: 'Tipo 1',
            passive: 'Habilidad pasiva 1',
            damage: 5
        }
    },
    {
        id: '2',
        data: {
            cardName: 'Carta 2',
            description: 'Descripcion de la carta 2',
            element: 'Tipo 2',
            passive: 'Habilidad pasiva 2',
            damage: 3
        }
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
    const input = [];

    newCards.forEach(newCard => {
        if (!newCard.id || !newCard.data) {
            input.push({ id: newCard.id, message: 'Datos incompletos' });
        } else if (card_list.find(card => card.id == newCard.id)) {
            input.push({ id: newCard.id, message: 'La carta ya existe' });
        } else {
            card_list.push(newCard);
            input.push({ message: 'Carta creada correctamente' });
        }
    });

    res.json(input);
});

app.delete('/cards/delete/:id', (req, res) => {
    const cardI = card_list.findIndex(card => card.id === req.params.id);
    if(cardI === -1) {
        res.status(404).json({ message : 'Carta no encontrada' });
    } else {
        card_list.splice(cardI, 1);
        res.json({ message : 'Carta eliminada correctamente' });
    }
});

app.put('/cards/update/:id', (req, res) => {
    const id = req.params.id;
    const updateCard = req.body;
    let cardI = card_list.findIndex(card => card.id === id);

    if (cardI !== -1) {
        for(let key in updateCard) {
            if(updateCard.hasOwnProperty(key)) {
                if(key === "data") {
                    for(let subKey in updateCard[key]) {
                        if(updateCard[key].hasOwnProperty(subKey)) {
                            if(card_list[cardI][key] && card_list[cardI][key][subKey]) {
                                card_list[cardI][key][subKey] = updateCard[key][subKey];
                            }
                        }
                    }
                } else {
                    card_list[cardI][key] = updateCard[key];
                }
            }
        }
        res.json({ message: 'Carta actualizada correctamente' });
    } else {
        res.status(404).json({ message: 'Carta no encontrada' });
    }
});



app.listen(port, ()=>{
    console.log(`Running on port ${port}`);
});
