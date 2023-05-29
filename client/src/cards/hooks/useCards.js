import { useCallback, useMemo, useState } from "react";
import {
  changeLikeStatus,
  createCard,
  deleteCard,
  editCard,
  getCard,
  getCards,
  getMyCards,
} from "../service/cardApiService";
import normlizeScriptCard from "../helpers/normlizeScriptCard";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import useAxios from "../../hooks/useAxios";

const useCards = () => {
  const [cards, setCards] = useState(null);
  const [card, setCard] = useState(null);
  const [isLoading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  useAxios();

  const requestStatus = (loading, errorMessage, cards, card = null) => {
    setLoading(loading);
    setError(errorMessage);
    setCards(cards);
    setCard(card);
  };

  const handleGetCards = async () => {
    try {
      setLoading(true);
      const cards = await getCards();

      requestStatus(false, null, cards);
    } catch (error) {
      requestStatus(false, error, null);
    }

    // const value = useMemo(() => {
    //     return { isLoading, cards, card, error  };
    //   }, [isLoading, cards, card, error]);
  };

  const handleGetCard = async (cardId) => {
    try {
      setLoading(true);
      const card = await getCard(cardId);
      requestStatus(false, null, null, card);
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  const handleGetMyCards = async () => {
    try {
      setLoading(true);
      const cards = await getMyCards();
      requestStatus(false, null, cards);
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  const handleCreateCard = useCallback(async (cardFromClient) => {
    try {
      setLoading(true);
      const normlizedCard = normlizeScriptCard(cardFromClient);
      const card = await createCard(normlizedCard);
      requestStatus(false, null, null, card);
      navigate(ROUTES.SCRIPTS);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleUpdateCard = async (cardFromClient) => {
    try {
      setLoading(true);
      const card = await editCard(cardFromClient);
      requestStatus(false, null, null, card);
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  const handleDeleteCard = async (cardId) => {
    try {
      setLoading(true);
      const card = await deleteCard(cardId);
      console.log(card);
      requestStatus(false, null, null, card);
    } catch (error) {}
    requestStatus(false, error, null);
  };

  const handleLikeCard = async (cardId) => {
    try {
      setLoading(true);
      const card = await changeLikeStatus(cardId);
      const cards = await getCards();
      requestStatus(false, null, cards, card);
    } catch (error) {
      requestStatus(false, error, null);
    }
  };
  return {
    isLoading,
    cards,
    card,
    error,
    handleGetCards,
    handleGetCard,
    handleGetMyCards,
    handleCreateCard,
    handleUpdateCard,
    handleDeleteCard,
    handleLikeCard,
  };
};

export default useCards;
