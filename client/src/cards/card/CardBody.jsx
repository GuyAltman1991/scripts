import { CardContent, Typography } from "@mui/material";
import React from "react";

const CardBody = ({ card }) => {
  return (
    <>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {card.title}
        </Typography>
        <Typography variant="h5" component="div">
          {card.genre} - {card.length}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Publisher: {card.publisher}
        </Typography>
        <Typography variant="body2">
          <Typography variant="span" sx={{ fontSize: 15, fontWeight: "bold" }}>
            {" "}
            Synopsis:{" "}
          </Typography>
          {card.synopsis}
        </Typography>
      </CardContent>
    </>
  );
};

export default CardBody;
