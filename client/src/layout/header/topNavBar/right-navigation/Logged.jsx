import { Avatar, Box, IconButton, Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useUser } from "../../../../users/providers/UserProvider";
import useUsers from "../../../../users/hooks/useUsers";
import Dashboard from "../../../../components/Dashboard";

const Logged = () => {
  const { user } = useUser();
  // const setOpen = useMenu();
  const { handleGetUser } = useUsers();

  useEffect(() => {
    handleGetUser();
  }, []);

  return (
    <Box sx={{ p: 0, display: "inline-flex", marginLeft: 2 }}>
      <Dashboard src={user.imageUrl} />
    </Box>
  );
  //   onClick={() => setOpen(true)}
};

export default Logged;
