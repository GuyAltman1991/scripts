const mergCardWithUser = async (card, user) => {
  return {
    title: card.title,
    genre: card.genre,
    length: card.length,
    language: card.language,
    synopsis: card.synopsis,
    anotherScreenwriter: card.anotherScreenwriter,
    script_treatment: card.script_treatment,
    fullScript: card.fullScript,
    firstName: user.name.firstName,
    lastName: user.name.lastName,
    imageUrl: user.imageUrl,
    email: user.email,
  };
};

module.exports = mergCardWithUser;
