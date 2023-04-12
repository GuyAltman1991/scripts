import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import NotLogged from "./NotLogged";
import Logged from "./Logged";
import { useTheme } from "../../../../providers/ThemeProvider";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const RightNavBar = () => {
  const user = false;
  const { isDark, toggleDarkMode } = useTheme();

  return (
    <>
      <IconButton sx={{ marginLeft: 1 }} onClick={toggleDarkMode}>
        {isDark ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
      <Box>
        {!user && <NotLogged />}
        {user && <Logged />}
      </Box>
    </>
  );
};

export default RightNavBar;
