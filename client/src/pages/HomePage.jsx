import React, { useEffect } from "react";
import { Card, CardMedia, Container } from "@mui/material";
import Cards from "../cards/Cards";
import cards from "../cards/cardsInitialData";
import useCards from "../cards/hooks/useCards";
import Error from "../components/Error";
import Spinner from "../components/Spinner";

const HomePage = () => {
  const { isLoading, handleGetCards, handleDeleteCard, value } = useCards();
  const { error, cards, filteredCards } = value;

  const onDeletCard = async (cardId) => {
    await handleDeleteCard(cardId);
    await handleGetCards();
  };

  useEffect(() => {
    handleGetCards();
  }, []);
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
        {isLoading && <Spinner />}
        {error && <Error errorMessage={error} />}
        {cards && !cards.length && (
          <p> there are no cards in the database that match the request</p>
        )}
        {cards && filteredCards && !!cards.length && (
          <Cards onDelete={onDeletCard} cards={filteredCards} />
        )}
      </Container>
    </>
  );
};

export default HomePage;
