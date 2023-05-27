const express = require("express");
const { handleError } = require("../../utils/errorHandler");
const normalizeCard = require("../helpers/normlizeCard");

const {
  getCards,
  createCard,
  getCard,
  deleteCard,
  updateCard,
  likeCard,
} = require("../models/cardsDataAccessService");
const validateCard = require("../validations/cardValidationService");
const auth = require("../../auth/authService");
const Card = require("../models/mongodb/Card");
const normlizeCard = require("../helpers/normlizeCard");
const { getUser, getUsers } = require("../../users/models/userDataService");
const mergCardWithUser = require("../helpers/mergCardWithUser");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let dataCards;
    const cards = await getCards();
    const userData = await getUsers();
    cards.map(async (card) => {
      userData.map(async (user) => {
        const filterUser = {
          name: {
            firstName: user.name.firstName,
            lastName: user.name.lastName,
          },
          imageUrl: user.imageUrl,
          email: user.email,
        };
        const data = await mergCardWithUser(card, filterUser);

        dataCards = data;
      });
      console.log(dataCards);
    });
    return res.send(dataCards);
  } catch (error) {
    const { status } = error;
    return handleError(res, status || 500, error.message);
  }
});

router.get("/my-cards", async (req, res) => {
  try {
    const { _id, isBusiness } = req.user;

    if (!isBusiness)
      return handleError(res, 403, "Authentication Error: Unauthorize user");

    const card = await getMyCards(_id);

    return res.send(card);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.post("/", auth, async (req, res) => {
  try {
    let card = req.body;
    const user = req.user;

    if (!user.isBusiness)
      return "Only a business user can post. please register as a business user";

    const { error } = validateCard(card);
    if (error)
      return handleError(res, 400, `Joi Error: ${error.details[0].message}`);
    card = await normlizeCard(card, user._id);
    card = await createCard(card);

    // 1. find user data by userId
    const userData = await getUser(user._id);
    //2. return response with card + userData
    const filterUser = {
      name: {
        firstName: userData.name.firstName,
        lastName: userData.name.lastName,
      },
      imageUrl: userData.imageUrl,
      email: userData.email,
    };
    const data = await mergCardWithUser(card, filterUser);
    return res.send(data);
  } catch (error) {
    const { status } = error;
    handleError(res, status || 500, error.message);
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    const cardId = req.params.id;
    const user = req.user;

    const card = await deleteCard(cardId, user);
    return res.send(card);
  } catch (error) {
    const { status } = error;
    handleError(res, status || 500, error.message);
  }
});

router.put("/:id", auth, async (req, res) => {
  try {
    let card = req.body;
    const user = req.user;
    const cardData = await Card.findOne({ _id: id });
    if (user._id != cardData.user_id) {
      const message =
        "Authorization Error: Only the user who created the card can update its details";
      return handleError(res, 403, message);
    }
    card = await updateCard(id, req.body);
    return res.send(card);
  } catch (error) {
    const { status } = error;
    handleError(res, status || 500, error.message);
  }
});

router.patch("/:id", auth, async (req, res) => {
  try {
    const cardId = req.params.id;
    const userId = req.user._id;
    const card = await likeCard(cardId, userId);
    return res.send(card);
  } catch (error) {
    const { status } = error;
    handleError(res, status || 500, error.message);
  }
});

module.exports = router;
