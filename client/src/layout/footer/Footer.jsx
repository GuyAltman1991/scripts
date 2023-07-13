import React, { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SpokeIcon from "@mui/icons-material/Spoke";
import { Box } from "@mui/material";
import ROUTES from "../../routes/routesModel";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../users/providers/UserProvider";

const Footer = () => {
  const [value, setValue] = useState("recents");
  const navigate = useNavigate();
  const { user } = useUser();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        position: "sticky",
        bottom: 0,
      }}
    >
      {user && (
        <BottomNavigation
          showLabels
          sx={{ width: "100%", backgroundColor: "#13678A" }}
          value={value}
          onChange={handleChange}
        >
          <BottomNavigationAction
            label="My Favorits"
            value="my favorits"
            icon={<FavoriteIcon />}
            onClick={() => navigate(ROUTES.FAVORITES)}
          />

          <BottomNavigationAction
            label="My Scripts"
            value="my scripts"
            icon={<FolderIcon />}
            onClick={() => navigate(ROUTES.MY_SCRIPTS)}
          />
          <BottomNavigationAction
            label="My Connections"
            value="my connections"
            icon={<SpokeIcon />}
            onClick={() => navigate(ROUTES.MY_CONNECTIONS)}
          />
        </BottomNavigation>
      )}
    </Box>
  );
};

export default Footer;
