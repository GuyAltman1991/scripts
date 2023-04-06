import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ROUTES from "../../../routes/routesModel";
import NavItem from "../../../routes/components/NavItem";

const AppNavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#024059" }}>
        <Toolbar>
          {/* <img src="../../../../public/assets/images/SCRIPTS.png" alt="logo" /> */}

          <NavItem label="LOGO" to={ROUTES.ROOT}></NavItem>
          <NavItem label="about" to={ROUTES.ABOUT} />
          <NavItem label="all scripts" to={ROUTES.SCRIPTS} />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <NavItem label="signup" to={ROUTES.SIGNUP} />
          <NavItem label="login" to={ROUTES.LOGIN} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppNavBar;
