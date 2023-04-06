import React from "react";
import MuiCard from "@mui/material/Card";
import { Box } from "@mui/material";

import { CardAction } from "./CardAction";
import CardBody from "./CardBody";

const Card = ({ card }) => {
  return (
    <Box sx={{ mt: 8 }}>
      <MuiCard sx={{ minWidth: 275 }}>
        <CardBody card={card} />
        <CardAction />
      </MuiCard>
    </Box>
  );
};

export default Card;
