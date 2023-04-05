import { Box } from "@mui/material";
import React from "react";
import NotLogged from "./NotLogged";
import Logged from "./Logged";

const RightNavBar = () => {
  const user = false;
  return (
    <>
      <Box>
        {!user && <NotLogged />}

        {user && <Logged />}
      </Box>
    </>
  );
};

export default RightNavBar;
