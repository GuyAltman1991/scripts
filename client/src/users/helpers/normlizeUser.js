const normlizeUser = (user) => ({
  firstName: user.name.firstName,
  lastName: user.name.lastName,

  phone: user.phone,
  email: user.email,
  password: user.password,
  imageUrl: user.imageUrl,
});
export default normlizeUser;
