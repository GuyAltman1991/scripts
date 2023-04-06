const express = require("express");
const { handleError } = require("../../utils/errorHandler");
const {
  getCards,
  createCard,
  getCard,
  deleteCard,
  updateCard,
  likeCard,
} = require("../models/cardsDataAccessService");

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

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const card = await getCard(id);
    res.send(card);
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

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const card = await deleteCard(id);
    res.send(card);
  } catch (error) {
    const { status } = error;
    handleError(res, status || 500, error.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const card = await updateCard(id, req.body);
    res.send(card);
  } catch (error) {
    const { status } = error;
    handleError(res, status || 500, error.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const userId = "12345";
    const card = await likeCard(id, userId);
    res.send(card);
  } catch (error) {
    const { status } = error;
    handleError(res, status || 500, error.message);
  }
});

module.exports = router;
