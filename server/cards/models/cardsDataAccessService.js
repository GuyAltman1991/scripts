const Card = require("../models/mongodb/Card");

const DB = process.env.DB || "MONGODB";

const getCards = async () => {
  if (DB === "MONGODB") {
    try {
      const cards = await Card.find().populate({
        path: "user_id",
        select: "name imageUrl email",
      });
      return Promise.resolve(cards);
    } catch (error) {
      return Promise.reject(error);
    }
  }
  return Promise.resolve("not in mongodb");
};

const getCard = async (cardId) => {
  if (DB === "MONGODB") {
    try {
      const card = await Card.findById(cardId).populate({
        path: "user_id",
        select: "name imageUrl email",
      });
      return Promise.resolve(card);
    } catch (error) {
      return Promise.reject(error);
    }
  }
  return Promise.resolve("not in mongodb");
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
  return Promise.resolve("not in mongodb");
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
  return Promise.resolve("not in mongodb");
};

const updateCard = async (id, rawCard) => {
  if (DB === "MONGODB") {
    try {
      let card = { ...rawCard };
      card = await Card.findByIdAndUpdate(id, card);
      return Promise.resolve(card);
    } catch (error) {
      return Promise.reject(error);
    }
  }
  return Promise.resolve("not in mongodb");
};

const deleteCard = async (cardId, user) => {
  if (DB === "MONGODB") {
    try {
      console.log("in data service");
      let card = await Card.findById(cardId);
      let cardUserId = card.user_id._id.toString();

      if (!card) throw new Error("card was not found");
      if (!user.isAdmin && user._id !== cardUserId)
        throw new Error(
          "only Admin or the user who create this card can delete it"
        );
      card = await Card.findByIdAndDelete(cardId);
      return Promise.resolve(card);
    } catch (error) {
      return Promise.reject(error);
    }
  }
  return Promise.resolve("not in mongodb");
};

const likeCard = async (cardId, userId) => {
  if (DB === "MONGODB") {
    try {
      let card = await Card.findById(cardId);
      if (!card)
        throw new Error(
          "could not change card like becouse a card with this ID cannot be found in the database!"
        );
      const cardLikes = card.likes.find((id) => id === userId);

      if (!cardLikes) {
        card.likes.push(userId);
        card = await card.save();
        return Promise.resolve(card);
      }
      const cardFiltered = card.likes.filter((id) => id !== userId);
      card.likes = cardFiltered;
      card = await card.save();
      return Promise.resolve(card);
    } catch (error) {
      error.status = 400;
      return handleBadRequest("mongoose", error);
    }
  }
  return Promise.resolve("not in mongodb");
};

exports.getCards = getCards;
exports.getCard = getCard;
exports.getMyCards = getMyCards;
exports.createCard = createCard;
exports.updateCard = updateCard;
exports.deleteCard = deleteCard;
exports.likeCard = likeCard;
