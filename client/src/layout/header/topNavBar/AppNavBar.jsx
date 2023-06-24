import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ROUTES from "../../../routes/routesModel";
import NavItem from "../../../routes/components/NavItem";
import { Link } from "@mui/material";
import NavBarLink from "../../../routes/components/NavBarLink";
import RightNavBar from "./right-navigation/RightNavBar";
import { useUser } from "../../../users/providers/UserProvider";

const AppNavBar = () => {
  const { user } = useUser();
  return (
    <Box sx={{ flexGrow: 1, height: "65px" }}>
      <AppBar position="static" sx={{ backgroundColor: "#024059" }}>
        <Toolbar>
          <NavBarLink to={ROUTES.ROOT}>
            {" "}
            <Box
              component="img"
              sx={{ height: 54, mr: 2 }}
              src="https://cdn.pixabay.com/photo/2013/07/12/13/22/writing-146913__340.png"
            />
          </NavBarLink>

          <NavItem label="about" to={ROUTES.ABOUT} />
          {user && <NavItem label="my scripts" to={ROUTES.MY_SCRIPTS} />}
          {user && <NavItem label="all scripts" to={ROUTES.SCRIPTS} />}
          {user && <NavItem label="my favorites" to={ROUTES.FAVORITES} />}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>

          <RightNavBar />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppNavBar;
