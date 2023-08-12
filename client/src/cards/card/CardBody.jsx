import { Box, CardContent, CardMedia, Typography } from "@mui/material";
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
          variant="h4"
          sx={{ mt: -4, fontSize: 28 }}
          color="text.secondary"
          gutterBottom
        >
          <span
            style={{
              textDecorationLine: "underline",
              textShadow: "#FC0 1px 0 10px",
            }}
          >
            Script Name:
          </span>{" "}
          <span
            style={{
              fontFamily: "cursive",
            }}
          >
            {card.title}
          </span>{" "}
        </Typography>
        <Typography variant="h5" component="div">
          <span
            style={{
              textDecorationLine: "underline",
              textShadow: "#FC0 1px 0 10px",
            }}
          >
            Script Genre:
          </span>{" "}
          <span
            style={{
              fontFamily: "cursive",
            }}
          >
            {card.genre}
          </span>{" "}
        </Typography>
        <Typography>
          <span
            style={{
              textDecorationLine: "underline",
              textShadow: "#FC0 1px 0 10px",
            }}
          >
            Script Length:
          </span>{" "}
          <span
            style={{
              fontFamily: "cursive",
            }}
          >
            {card.length}
          </span>{" "}
        </Typography>
        <Typography
          variant="body2"
          sx={{ wordWrap: "break-word", maxHeight: "30px" }}
        >
          <Typography variant="span" sx={{ fontSize: 15, fontWeight: "bold" }}>
            {" "}
            <span
              style={{
                textDecorationLine: "underline",
                textShadow: "#FC0 1px 0 10px",
              }}
            >
              Synopsis:
            </span>{" "}
            <Typography
              sx={{
                maxHeight: "20vh",
                overflow: "hidden",
              }}
            >
              {" "}
              {card.synopsis}
            </Typography>
          </Typography>
        </Typography>
      </CardContent>
    </>
  );
};

export default CardBody;
