const normlizeScriptCard = (card) => {
  return {
    title: card.title,
    genre: card.genre,
    length: card.length,
    language: card.language,
    synopsis: card.synopsis,
    screenwriter: card.screenwriter,
    script_treatment: card.script_treatment,
    fullScript: card.fullScript,
  };
};

export default normlizeScriptCard;
