import { Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Cards from "../cards/Cards";
// import initialDataCards from "../cards/cardsData";
import { getCards } from "../cards/service/cardApiService";
import Spinner from "../components/Spinner";
import Error from "../components/Error";
import useCards from "../cards/hooks/useCards";

const ScriptsPage = ({ onDelete }) => {
  const { value, handleGetCards, handleDeleteCard } = useCards();
  const { isLoading, error, cards } = value;
  useEffect(() => {
    handleGetCards();
  }, []);

  const onDeleteCard = async (cardId) => {
    console.log("script" + cardId);
    await handleDeleteCard(cardId);
    await handleGetCards();
  };

  return (
    <>
      {" "}
      <Container>
        <Typography variant="h2" color="initial">
          ALL THE SCRIPTS
        </Typography>
        {isLoading && <Spinner />}
        {error && <Error errorMessage={error} />}
        {cards && !cards.length && (
          <p> there are no cards in the database that match the request</p>
        )}
        {cards && !!cards.length && <Cards cards={cards} onDelete={onDelete} />}
      </Container>
    </>
  );
};

export default ScriptsPage;
