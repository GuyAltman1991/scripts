const normlizeUser = (user) => ({
  name: {
    firstName: user.firstName,
    lastName: user.lastName,
  },
  phone: user.phone,
  email: user.email,
  password: user.password,
  imageUrl: user.imageUrl,
});
export default normlizeUser;
