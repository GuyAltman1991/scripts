import { Avatar, IconButton, Tooltip } from "@mui/material";
import React from "react";

const Logged = () => {
  // const setOpen = useMenu();
  return (
    <Tooltip title="Open settings">
      <IconButton sx={{ p: 0, display: "inline-flex", marginLeft: 2 }}>
        <Avatar alt="Bird" src="/assets/images/avatar.png" />
      </IconButton>
    </Tooltip>
  );
  //   onClick={() => setOpen(true)}
};

export default Logged;
