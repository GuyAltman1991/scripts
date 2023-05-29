import { CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

const CardBody = ({ card }) => {
  return (
    <>
      <CardContent>
        {" "}
        <Typography
          variant="span"
          sx={{ mb: 1.5, display: "flex", justifyContent: "left" }}
          color="text.secondary"
        >
          <CardMedia
            sx={{ mr: 2, mb: 0.5, height: 35, width: 35, borderRadius: 4 }}
            image={card.user_id.imageUrl}
          >
            {" "}
          </CardMedia>
          {card.user_id.name.firstName + " " + card.user_id.name.lastName}{" "}
        </Typography>
        <Typography
          sx={{ mt: -4, fontSize: 14 }}
          color="text.secondary"
          gutterBottom
        >
          {card.title}
        </Typography>
        <Typography variant="h5" component="div">
          {card.genre} - {card.length}
        </Typography>
        <Typography
          variant="body2"
          sx={{ wordWrap: "break-word", maxHeight: "30px" }}
        >
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
