const normlizeUser = require("../helpers/normlizeUser");
const { pick } = require("lodash");
const User = require("./mongodb/User");

const registerUser = async (normalizeUser) => {
  try {
    let user = new User(normalizeUser);
    user = await user.save();
    user = pick(user, ["name", "email", "_id"]);
    return Promise.resolve(user);
  } catch (error) {
    return Promise.reject(error);
  }
};

const getUsers = async () => {
  try {
    const users = User.find({}, { password: 0, __v: 0 });
    if (!users) throw new Error("there are no users in the database!");
    return Promise.resolve(users);
  } catch (error) {
    return Promise.reject(error);
  }
};

const getUser = async (userId) => {
  try {
    let user = await User.findById(userId, {
      password: 0,
      __v: 0,
    });
    if (!user) throw new Error("could not find this user in the database!");
    return Promise.resolve(user);
  } catch (error) {
    return Promise.reject(error);
  }
};

const updateUser = async (userId, normlizeUser) => {
  try {
    const user = await User.findByIdAndUpdate(userId, normlizeUser, {
      new: true,
    }).select(["-password", "-__v"]);

    if (!user) throw new Error("could not find this user in the database!");
    return Promise.resolve(user);
  } catch (error) {
    return Promise.reject(error);
  }
};

const deleteUser = async (userId) => {
  try {
    const user = await User.findByIdAndDelete(userId).select({
      password: 0,
      __v: 0,
    });
    return Promise.resolve(user);
  } catch (error) {
    return Promise.reject(error);
  }
};

exports.registerUser = registerUser;
exports.getUsers = getUsers;
exports.getUser = getUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
