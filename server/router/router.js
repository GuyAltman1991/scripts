const express = require("express");
const { handleError } = require("../utils/errorHandler");
const router = express.Router();
const cardRestController = require("../cards/routes/cardRestController");

router.use("/cards", cardRestController);

router.use((req, res) => handleError(res, 404, "Page not found!"));

module.exports = router;
