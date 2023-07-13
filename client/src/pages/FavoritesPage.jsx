import React, { useCallback, useEffect, useState } from "react";
import useCards from "../cards/hooks/useCards";
import { Container, Typography } from "@mui/material";
import Spinner from "../components/Spinner";
// import Error from "../components/Error";
import Cards from "../cards/Cards";
import { Navigate } from "react-router-dom";
import ROUTES from "../routes/routesModel";
import { useUser } from "../users/providers/UserProvider";
import useUsers from "../users/hooks/useUsers";

const FavoritesPage = () => {
  const { handleGetFavCards, value, handleDeleteCard } = useCards();
  const { cards, isLoading, error } = value;
  const { user } = useUser();
  const { handleGetUser, isLoading: userIsLoading } = useUsers();

  useEffect(() => {
    handleGetUser();
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

  if (!userIsLoading && !user) return <Navigate replace to={ROUTES.ROOT} />;

  console.log(
    user,
    cards,
    isLoading,
    !user && cards && !cards.length,
    !isLoading && cards && !!cards.length
  );

  return (
    <>
      <Container sx={{ mt: 2 }}>
        <Typography sx={{ mt: -2 }} variant="h2" color="initial">
          MY FAVORITES SCRIPTS
        </Typography>

        {isLoading && <Spinner />}
        {error && console.log(error)}
        {!user && cards && !cards.length && (
          <p> there are no cards in the database that match the request</p>
        )}

        {!isLoading && cards && !!cards.length && (
          <Cards
            cards={cards}
            onDelete={onDeleteCard}
            onLike={changeLikeStatus}
          />
        )}
      </Container>
    </>
  );
};

export default FavoritesPage;
