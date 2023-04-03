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

exports.getCards = getCards;
exports.createCard = createCard;
