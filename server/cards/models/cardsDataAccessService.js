const Card = require("../models/mongodb/Card");

const DB = process.env.DB || "MONGODB";

const getCards = async () => {
  if (DB === "MONGODB") {
    try {
      const cards = await Card.find();
      return Promise.resolve(cards);
    } catch (error) {
      return Promise.reject(error);
    }
  }
};

const getCard = async (cardId) => {
  if (DB === "MONGODB") {
    try {
      const card = await Card.findById(cardId);
      return Promise.resolve(card);
    } catch (error) {
      return Promise.reject(error);
    }
  }
};

const getMyCards = async (userId) => {
  if (DB === "MONGODB") {
    try {
      const cards = await Card.find({ user_id: userId });
      if (!cards)
        throw new Error("could not find any information in the database");
      return Promise.resolve(cards);
    } catch (error) {
      return Promise.reject(error);
    }
  }
};

const createCard = async (normlizeCard) => {
  if (DB === "MONGODB") {
    try {
      let card = new Card(normlizeCard);

      card = await card.save();

      return Promise.resolve(card);
    } catch (error) {
      return Promise.reject(error);
    }
  }
};

const updateCard = async (id, rawCard) => {
  if (DB === "MONGODB") {
    try {
      const card = { ...rawCard };
      card = await Card.findByIdAndUpdate(id, card);
    } catch (error) {
      return Promise.reject(error);
    }
  }
};

const deleteCard = async (id) => {
  if (DB === "MONGODB") {
    try {
      const card = Card.findByIdAndRemove(id);
      Promise.resolve(card);
    } catch (error) {
      Promise.reject(error);
    }
  }
};

const likeCard = async (cardId, userId) => {
  if ((DB = "MONGODB")) {
    try {
      const card = Card.findById(cardId);
      return Promise.resolve(card);
    } catch (error) {
      Promise.reject(error);
    }
  }
};

exports.getCards = getCards;
exports.getCard = getCard;
exports.getMyCards = getMyCards;
exports.createCard = createCard;
exports.updateCard = updateCard;
exports.deleteCard = deleteCard;
exports.likeCard = likeCard;
