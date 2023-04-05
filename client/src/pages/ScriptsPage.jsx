import { Container, Typography } from "@mui/material";
import React from "react";
import Cards from "../cards/Cards";
import cards from "../cards/cardsData";

const ScriptsPage = () => {
  return (
    <>
      <Typography variant="h2" color="initial">
        ALL THE SCRIPTS
      </Typography>
      <Container>
        <Cards cards={cards} />
      </Container>
    </>
  );
};

export default ScriptsPage;
