const express = require("express");
const normlizeUser = require("../helpers/normlizeUser");
const {
  registerUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  loginUser,
} = require("../models/userDataService");
const { handleError } = require("../../utils/errorHandler");
const loginValidation = require("../validation/loginValidation");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    let user = req.body;
    user = normlizeUser(user);
    user = await registerUser(user);

    return res.send(user);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.post("/login", async (req, res) => {
  try {
    let user = req.body;
    const { error } = loginValidation(user);
    if (error)
      return handleError(res, 400, `Joi Error: ${error.details[0].message}`);

    const token = await loginUser(req.body);
    return res.send(token);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await getUsers();
    return res.send(users);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    let userId = req.params.id;
    const user = await getUser(userId);
    return res.send(user);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    let user = req.body;
    user = normlizeUser(user);
    user = await updateUser(userId, user);
    return res.send(user);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await deleteUser(userId);
    return res.send(user);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

module.exports = router;
