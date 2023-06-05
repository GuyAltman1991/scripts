import React, { useCallback, useEffect } from "react";
import useCards from "../cards/hooks/useCards";
import { Container } from "@mui/material";
import Spinner from "../components/Spinner";
import Error from "../components/Error";
import Cards from "../cards/Cards";

const FavoritesPage = () => {
  const { handleGetFavCards, value, handleDeleteCard, handleGetCards } =
    useCards();
  const { cards, isLoading, error } = value;
  useEffect(() => {
    handleGetFavCards();
    console.log(cards);
  }, []);

  const onDeleteCard = useCallback(
    async (cardId) => {
      await handleDeleteCard(cardId);
      await handleGetCards();
    },
    [handleDeleteCard]
  );

  const changeLikeStatus = useCallback(async () => {
    await handleGetFavCards();
  }, []);

  return (
    <Container>
      {isLoading && <Spinner />}

      {cards && !cards.length && (
        <p> there are no cards in the database that match the request</p>
      )}

      {cards && !!cards.length && (
        <Cards
          cards={cards}
          onDelete={onDeleteCard}
          onLike={changeLikeStatus}
        />
      )}
    </Container>
  );
};

export default FavoritesPage;
