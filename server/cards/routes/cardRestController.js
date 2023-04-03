const express = require("express");
const { handleError } = require("../../utils/errorHandler");
const { getCards, createCard } = require("../models/cardsDataAccessService");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const cards = await getCards();
    res.send(cards);
  } catch (error) {
    const { status } = error;
    handleError(res, status || 500, error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    let card = req.body;
    card = await createCard(card);
    return res.send(card);
  } catch (error) {
    const { status } = error;

    handleError(res, status || 500, error.message);
  }
});

module.exports = router;
