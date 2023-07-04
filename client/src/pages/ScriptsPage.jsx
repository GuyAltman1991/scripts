import { Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Cards from "../cards/Cards";
// import initialDataCards from "../cards/cardsData";

import Spinner from "../components/Spinner";
import Error from "../components/Error";
import useCards from "../cards/hooks/useCards";

const ScriptsPage = ({ onDelete }) => {
  const { value, handleGetCards, handleDeleteCard } = useCards();
  const { isLoading, error, cards, filteredCards } = value;
  useEffect(() => {
    handleGetCards();
  }, []);

  const onDeleteCard = async (cardId) => {
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
        {cards && filteredCards && !!cards.length && (
          <Cards cards={filteredCards} onDelete={onDeleteCard} />
        )}
      </Container>
    </>
  );
};

export default ScriptsPage;
