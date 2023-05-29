import { Grid } from "@mui/material";
import React from "react";
import Card from "./card/Card";

const Cards = ({ cards, onDelete }) => {
  return (
    <Grid container spacing={2} pb={2}>
      {cards.map((card) => (
        <Grid item xs={12} key={card._id}>
          <Card card={card} onDelete={onDelete} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
