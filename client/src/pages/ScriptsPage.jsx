import { Box, Card, Container, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Cards from "../cards/Cards";
// import initialDataCards from "../cards/cardsData";

import Spinner from "../components/Spinner";
import Error from "../components/Error";
import useCards from "../cards/hooks/useCards";

const ScriptsPage = ({ onDelete }) => {
  const { value, handleGetCards, handleDeleteCard, setFilter } = useCards();
  const { isLoading, error, cards, filteredCards } = value;

  useEffect(() => {
    handleGetCards();
  }, []);

  const onDeleteCard = async (cardId) => {
    await handleDeleteCard(cardId);
    await handleGetCards();
  };

  const handleChooseCategory = (category) => {
    const result = cards.filter((card) => card.genre === category);
    setFilter(result);
  };

  return (
    <>
      {" "}
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 128,
              height: 55,
            },
          }}
        >
          <Card onClick={() => handleChooseCategory("drama")}>
            {" "}
            <Typography sx={{ fontSize: 25, mt: 1 }} color="text.secondary">
              DRAMA
            </Typography>
          </Card>
          <Card onClick={() => handleChooseCategory("comedy")}>
            {" "}
            <Typography sx={{ fontSize: 25, mt: 1 }} color="text.secondary">
              COMEDY
            </Typography>
          </Card>
          <Card onClick={() => handleChooseCategory("horor")}>
            {" "}
            <Typography sx={{ fontSize: 25, mt: 1 }} color="text.secondary">
              HOROR
            </Typography>
          </Card>
          <Card onClick={() => handleChooseCategory("action")}>
            {" "}
            <Typography sx={{ fontSize: 25, mt: 1 }} color="text.secondary">
              ACTION
            </Typography>
          </Card>
          <Card onClick={() => handleChooseCategory("musical")}>
            {" "}
            <Typography sx={{ fontSize: 25, mt: 1 }} color="text.secondary">
              MUSICAL
            </Typography>
          </Card>
        </Box>

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
