INSERT INTO Deck (CreationDate, Name, Description, Size) VALUES 
('2022-01-01', 'Fire Deck', 'A deck filled with fire type Pokémon', 60),
('2022-01-02', 'Water Deck', 'A deck filled with water type Pokémon', 60),
('2022-01-03', 'Grass Deck', 'A deck filled with grass type Pokémon', 60),
('2022-01-04', 'Electric Deck', 'A deck filled with electric type Pokémon', 60),
('2022-01-05', 'Psychic Deck', 'A deck filled with psychic type Pokémon', 60),
('2022-01-06', 'Fighting Deck', 'A deck filled with fighting type Pokémon', 60),
('2022-01-07', 'Dark Deck', 'A deck filled with dark type Pokémon', 60),
('2022-01-08', 'Steel Deck', 'A deck filled with steel type Pokémon', 60),
('2022-01-09', 'Fairy Deck', 'A deck filled with fairy type Pokémon', 60),
('2022-01-10', 'Dragon Deck', 'A deck filled with dragon type Pokémon', 60),
('2022-01-11', 'Normal Deck', 'A deck filled with normal type Pokémon', 60),
('2022-01-12', 'Ghost Deck', 'A deck filled with ghost type Pokémon', 60),
('2022-01-13', 'Bug Deck', 'A deck filled with bug type Pokémon', 60);

INSERT INTO Player (Name, isNPC, Wins, Losses, ActiveDeckID, DeckListID) VALUES 
('Ash', false, 10, 5, 1, 1),
('Misty', false, 15, 10, 2, 2),
('Brock', true, 20, 15, 3, 3),
('Lt. Surge', false, 25, 20, 4, 4),
('Sabrina', false, 30, 25, 5, 5),
('Bruno', true, 35, 30, 6, 6),
('Karen', true, 40, 35, 7, 7),
('Jasmine', false, 45, 40, 8, 8),
('Valerie', false, 50, 45, 9, 9),
('Drake', true, 55, 50, 10, 10),
('Norman', true, 60, 55, 11, 11),
('Agatha', true, 65, 60, 12, 12),
('Bugsy', false, 70, 65, 13, 13);

INSERT INTO Game (Player1_ID, Player2_ID, Winner_ID, Duration) VALUES 
(1, 2, 1, 30),
(2, 3, 2, 45),
(3, 1, 3, 60),
(1, 3, 3, 50),
(2, 4, 4, 35),
(3, 5, 5, 40),
(4, 6, 4, 55),
(5, 7, 7, 60),
(6, 8, 8, 45),
(7, 9, 9, 50),
(8, 10, 10, 55),
(9, 11, 11, 40),
(10, 12, 12, 35);

INSERT INTO Effect (Name, Duration, TargetType, EffectType) VALUES 
('Burn', 5, 'Player', 'Damage'),
('Heal', 10, 'Card', 'Heal'),
('Draw', 15, 'Deck', 'Draw'),
('Paralyze', 5, 'Player', 'Status'),
('Confuse', 10, 'Card', 'Status'),
('Poison', 15, 'Deck', 'Damage'),
('Sleep', 5, 'Player', 'Status'),
('Freeze', 10, 'Card', 'Status'),
('Burn', 15, 'Deck', 'Damage'),
('Stun', 5, 'Player', 'Status'),
('Recover', 10, 'Card', 'Heal'),
('Shield', 15, 'Deck', 'Shield'),
('Boost', 20, 'Card', 'Boost');

INSERT INTO Cards (Name, Description, Type, EnergyCost, Rarity, EffectID, DeckID)
VALUES
('Charizard', 'A powerful fire type Pokémon', 'Fire', 4, 'Rare', 1, 1),
('Blastoise', 'A powerful water type Pokémon', 'Water', 3, 'Uncommon', 2, 2),
('Venusaur', 'A powerful grass type Pokémon', 'Grass', 5, 'Rare', 3, 3),
('Pikachu', 'A small electric type Pokémon', 'Electric', 2, 'Common', 1, 4),
('Alakazam', 'A powerful psychic type Pokémon', 'Psychic', 3, 'Rare', 2, 5),
('Machamp', 'A powerful fighting type Pokémon', 'Fighting', 4, 'Uncommon', 3, 6),
('Umbreon', 'A dark type Pokémon', 'Darkness', 2, 'Rare', 4, 7),
('Steelix', 'A steel type Pokémon', 'Metal', 5, 'Rare', 5, 8),
('Sylveon', 'A fairy type Pokémon', 'Fairy', 3, 'Uncommon', 6, 9),
('Dragonite', 'A dragon type Pokémon', 'Dragon', 5, 'Rare', 7, 10),
('Snorlax', 'A normal type Pokémon', 'Colorless', 3, 'Uncommon', 8, 11),
('Gengar', 'A ghost type Pokémon', 'Ghost', 4, 'Rare', 9, 12),
('Scyther', 'A bug type Pokémon', 'Bug', 2, 'Common', 10, 13);