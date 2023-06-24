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
import { useUser } from "../../users/providers/UserProvider";
import { SnackbarProvider } from "../../providers/SnackbarProvider";

const useCards = () => {
  const { user } = useUser();
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
  };

  const handleGetCard = async (cardId) => {
    try {
      setLoading(true);
      const card = await getCard(cardId);
      requestStatus(false, null, null, card);
      console.log(card);
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

  const handleGetFavCards = useCallback(async () => {
    try {
      setLoading(true);

      const cards = await getCards();
      const favCards = cards.filter(
        (card) => !!card.likes.find((_id) => _id === user._id)
      );
      requestStatus(false, null, favCards, null);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleCreateCard = useCallback(async (cardFromClient) => {
    try {
      setLoading(true);
      const normlizedCard = normlizeScriptCard(cardFromClient);
      const card = await createCard(normlizedCard);
      requestStatus(false, null, null, card);
      navigate(ROUTES.MY_SCRIPTS);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleUpdateCard = async (cardId, cardFromClient) => {
    try {
      setLoading(true);
      const card = await editCard(cardId, cardFromClient);
      requestStatus(false, null, null, card);
      SnackbarProvider("script has been update");
      navigate(ROUTES.MY_SCRIPTS);
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  const handleDeleteCard = async (cardId) => {
    try {
      setLoading(true);
      const card = await deleteCard(cardId);
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

  const value = useMemo(() => {
    return { isLoading, cards, card, error };
  }, [isLoading, cards, card, error]);

  return {
    value,
    handleGetCards,
    handleGetCard,
    handleGetMyCards,
    handleGetFavCards,
    handleCreateCard,
    handleUpdateCard,
    handleDeleteCard,
    handleLikeCard,
  };
};

export default useCards;
