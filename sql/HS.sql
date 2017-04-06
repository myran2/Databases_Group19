CREATE TABLE Cards (
	id int NOT NULL,
    blizz_id varchar(15) NOT NULL,
	name varchar(50) NOT NULL,
    class int NOT NULL,
	rarity int NOT NULL,
	description varchar(1000),
    manaCost int NOT NULL,
	health int NOT NULL,
	attack int NOT NULL,
	dustCost int NOT NULL,
    expansion int NOT NULL,
    collectible char DEFAULT(0) CHECK(collectible IN(0,1)),
	PRIMARY KEY (id));

CREATE TABLE Effects (
	cardID int,
	type int NOT NULL,
	FOREIGN KEY (cardID) REFERENCES Cards(id));

CREATE TABLE Accounts (
	id int NOT NULL,
	username varchar(255) NOT NULL,
	password varchar(255) NOT NULL,
	lastLogin Date,
	PRIMARY KEY (id));

CREATE TABLE Collections (
	isGold char DEFAULT 0 CHECK(isGold IN(0,1)),
	count int DEFAULT 1 CHECK(count IN(1,2)),
	cardID int,
	accID int,
	FOREIGN KEY (cardID) REFERENCES Cards(id),
	FOREIGN KEY (accID) REFERENCES Accounts(id));

CREATE TABLE Deck_Meta (
	id int NOT NULL,
	name varchar(255) NOT NULL,
	class int NOT NULL,
	accId int DEFAULT(0),
	isStandard char DEFAULT(0) CHECK(isStandard IN(0,1)),
	created Date DEFAULT(SYSDATE),
	modified Date,
	PRIMARY KEY (id),
	FOREIGN KEY (accId) REFERENCES Accounts(id));

CREATE TABLE Decks (
	deckID int NOT NULL,
	cardID int NOT NULL,
	count int DEFAULT(1) CHECK(count IN(1,2)),
	PRIMARY KEY (deckID, cardID),
	FOREIGN KEY (deckID) REFERENCES Deck_Meta(id),
	FOREIGN KEY (cardID) REFERENCES Cards(id));
	


