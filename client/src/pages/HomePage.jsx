import React from "react";
import { Card, CardMedia, Container } from "@mui/material";
import Cards from "../cards/Cards";
import cards from "../cards/cardsData";

const HomePage = () => {
  return (
    <>
      <Container>
        {" "}
        <Card>
          <div style={{ position: "relative" }}>
            <CardMedia
              style={{ height: "300px", fill: "ActiveBorder" }}
              component="img"
              image={
                "https://media.istockphoto.com/id/1318375626/photo/new-chapter-words-typed-on-a-vintage-typewriter.jpg?b=1&s=170667a&w=0&k=20&c=T4WNTlw_1A-W6S-aUv52EP8SYjhl9MZSFJkqYRX3pC4="
              }
              title="home page image"
              alt="Phome page image"
            />
            <div
              style={{
                position: "absolute",
                color: "black",
                top: 10,
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              {" "}
              <span style={{ fontFamily: "caveat", fontSize: 20 }}>
                {" "}
                Lets Write A{" "}
              </span>
            </div>
          </div>
        </Card>
        <Cards cards={cards} />
      </Container>
    </>
  );
};

export default HomePage;
