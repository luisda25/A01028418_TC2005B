DROP DATABASE IF exists pokemon;

CREATE DATABASE IF NOT exists pokemon;

USE pokemon;

CREATE TABLE Deck (
    DeckID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    CreationDate DATE NOT NULL,
    Name VARCHAR(50) NOT NULL DEFAULT 'name',
    Description VARCHAR(100) NOT NULL DEFAULT 'description',
    Size INT NOT NULL DEFAULT 0
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE Player (
    PlayerID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    Name VARCHAR(50) NOT NULL DEFAULT 'name',
    isNPC BOOLEAN NOT NULL,
    Wins INT NOT NULL DEFAULT 0,
    Losses INT NOT NULL DEFAULT 0,
    ActiveDeckID INT NOT NULL,
    DeckListID INT NOT NULL,
    FOREIGN KEY (ActiveDeckID) REFERENCES Deck(DeckID),
    FOREIGN KEY (DeckListID) REFERENCES Deck(DeckID)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE Game (
    GameID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    Player1_ID INT NOT NULL,
    Player2_ID INT NOT NULL,
    Winner_ID INT NOT NULL,
    Duration INT NOT NULL,
    FOREIGN KEY (Player1_ID) REFERENCES Player(PlayerID),
    FOREIGN KEY (Player2_ID) REFERENCES Player(PlayerID),
    FOREIGN KEY (Winner_ID) REFERENCES Player(PlayerID)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE Effect (
    EffectID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    Name VARCHAR(50) NOT NULL DEFAULT 'name',
    Duration INT NOT NULL,
    TargetType VARCHAR(50) NOT NULL,
    EffectType VARCHAR(50) NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE Cards (
    CardID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    Name VARCHAR(50) NOT NULL DEFAULT 'name',
    Description VARCHAR(100) NOT NULL DEFAULT 'description',
    Type enum ('Fire', 'Water', 'Grass', 'Electric', 'Psychic', 'Fighting', 'Darkness', 'Metal', 'Fairy', 'Dragon', 'Colorless', 'Ice', 'Rock', 'Flying', 'Bug', 'Ghost') NOT NULL,
    EnergyCost INT NOT NULL,
    Rarity VARCHAR(50) NOT NULL DEFAULT 'rarity',
    EffectID INT NOT NULL,
    DeckID INT NOT NULL,
    FOREIGN KEY (EffectID) REFERENCES Effect(EffectID),
    FOREIGN KEY (DeckID) REFERENCES Deck(DeckID)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;