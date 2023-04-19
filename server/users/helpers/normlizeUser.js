const normlizeUser = (rawUser) => {
  const name = { ...rawUser.name };
  const image = {
    ...rawUser.image,
    url:
      rawUser.imageUrl ||
      "https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527__340.png",
  };
  const address = {
    ...rawUser.address,
    state: rawUser.address.state || "not defined",
  };

  const user = {
    ...rawUser,
    name,
    image,
    address,
  };
  return user;
};

module.exports = normlizeUser;
