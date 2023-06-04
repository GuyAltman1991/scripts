const mapToCardModel = (card) => {
  return {
    title: card.title,
    genre: card.genre,
    length: card.length,
    language: card.language,
    synopsis: card.synopsis,
    anotherScreenwriter: card.anotherScreenwriter,
    script_treatment: card.script_treatment,
    fullScript: card.fullScript,
    user_id: card.user_id._id,
    userFirstName: card.user_id.name.firstName,
    userLastName: card.user_id.name.lastName,
    userImage: card.user_id.imageUrl,
    userEmail: card.user_id.email,
  };
};

export default mapToCardModel;
