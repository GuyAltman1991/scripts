import {
  Box,
  Hidden,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import useCards from "../cards/hooks/useCards";

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
  const navigate = useNavigate();
  const { handleGetCards } = useCards();

  return (
    <Box sx={{ transform: "translateZ(0px)", flexGrow: 1 }}>
      <Box sx={{ position: "relative", mt: 0, height: 320 }}>
        <StyledSpeedDial
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
      </Box>
    </Box>
  );
};

export default MyScriptsPage;
