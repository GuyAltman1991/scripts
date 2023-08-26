import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import NotLogged from "./NotLogged";
import Logged from "./Logged";
import { useTheme } from "../../../../providers/ThemeProvider";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useUser } from "../../../../users/providers/UserProvider";
import SearchBar from "../../../../components/SearchBar";

const RightNavBar = () => {
  const { user } = useUser();
  const { isDark, toggleDarkMode } = useTheme();

  return (
    <>
      <SearchBar />
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
