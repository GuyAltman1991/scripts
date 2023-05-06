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
const auth = require("../../auth/authService");
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

router.get("/", auth, async (req, res) => {
  try {
    const { isAdmin } = req.user;
    if (!isAdmin)
      return handleError(
        res,
        403,
        "Authorization error: you must be an admin to get all the users"
      );
    const users = await getUsers();
    return res.send(users);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.get("/:id", auth, async (req, res) => {
  try {
    const { _id, isAdmin } = req.user;
    let userId = req.params.id;

    if (_id !== userId && !isAdmin)
      return handleError(
        res,
        403,
        "Authorization error: you must be an admin to get the user"
      );
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
