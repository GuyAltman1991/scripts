import { Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Cards from "../cards/Cards";
// import initialDataCards from "../cards/cardsData";
import { getCards } from "../cards/service/cardApiService";
import Spinner from "../components/Spinner";
import Error from "../components/Error";
import useCards from "../cards/hooks/useCards";

const ScriptsPage = () => {
  const { isLoading, error, cards, handleGetCards } = useCards();

  useEffect(() => {
    handleGetCards();
  }, []);

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
        {cards && !!cards.length && <Cards cards={cards} />}
      </Container>
    </>
  );
};

export default ScriptsPage;
