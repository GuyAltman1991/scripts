import {
  Box,
  Container,
  Hidden,
  Paper,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
} from "@mui/material";
import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import AddIcon from "@mui/icons-material/Add";
import { Navigate, useNavigate } from "react-router-dom";
import useCards from "../cards/hooks/useCards";
import { useUser } from "../users/providers/UserProvider";
import ROUTES from "../routes/routesModel";
import Spinner from "../components/Spinner";
import Error from "../components/Error";
import Cards from "../cards/Cards";
import useUsers from "../users/hooks/useUsers";

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: "absolute",
  "&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft": {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  "&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {
    top: theme.spacing(2),
    left: theme.spacing(2),
  },
}));

const actions = [
  { icon: <AddIcon />, name: "Add project" },
  // { icon: <SaveIcon />, name: "Save" },
  // { icon: <PrintIcon />, name: "Print" },
  // { icon: <ShareIcon />, name: "Share" },
];

const MyScriptsPage = () => {
  const [direction, setDirection] = React.useState("up");
  const [hidden, setHidden] = React.useState(false);
  const { user } = useUser();
  const { handleGetUser, isLoading: userIsLoading } = useUsers();
  const navigate = useNavigate();
  const { handleGetCards, handleGetMyCards, handleDeleteCard, value } =
    useCards();

  const { isLoading, error, cards } = value;

  useEffect(() => {
    handleGetUser();
    handleGetMyCards();
  }, []);

  const onDeletCard = async (cardId) => {
    await handleDeleteCard(cardId);
    await handleGetMyCards();
  };
  if (!userIsLoading && !user) return <Navigate replace to={ROUTES.ROOT} />;

  return (
    <>
      {" "}
      <StyledSpeedDial
        sx={{ position: "sticky" }}
        ariaLabel="SpeedDial playground example"
        hidden={hidden}
        icon={<SpeedDialIcon />}
        direction={direction}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => {
              navigate("/create_script");
            }}
          />
        ))}
      </StyledSpeedDial>
      <Container sx={{ mt: 2, transform: "translateZ(0px)", flexGrow: 1 }}>
        {isLoading && <Spinner />}
        {error && <Error errorMessage={error} />}
        {!user && cards && !cards.length && (
          <p> there are no cards in the database that match the request</p>
        )}
        {!userIsLoading && cards && !!cards.length && (
          <Cards onDelete={onDeletCard} cards={cards} />
        )}
      </Container>
    </>
  );
};

export default MyScriptsPage;
