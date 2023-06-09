import React, { useCallback, useEffect, useState } from "react";
import useCards from "../cards/hooks/useCards";
import { Box, Container } from "@mui/material";
import Spinner from "../components/Spinner";
// import Error from "../components/Error";
import Cards from "../cards/Cards";

const FavoritesPage = () => {
  const { handleGetFavCards, value, handleDeleteCard } = useCards();
  const { cards, isLoading, error } = value;

  useEffect(() => {
    handleGetFavCards();
  }, []);

  const onDeleteCard = useCallback(
    async (cardId) => {
      await handleDeleteCard(cardId);
      await handleGetFavCards();
    },
    [handleDeleteCard]
  );

  const changeLikeStatus = useCallback(async () => {
    await handleGetFavCards();
  }, []);

  return (
    <Container sx={{ mt: 2 }}>
      {isLoading && <Spinner />}
      {error && console.log(error)}
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
