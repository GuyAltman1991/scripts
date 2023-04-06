import { Button, CardActions, IconButton, Typography } from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FolderIcon from "@mui/icons-material/Folder";

export const CardAction = () => {
  return (
    <>
      <CardActions>
        <Button size="small">Read More</Button>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        ></Typography>
        <IconButton
          aria-label="add to favorites"
          onMouseEnter={() => console.log("enter")}
          onMouseLeave={() => console.log("leave")}
        >
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="add to worth reading folder">
          <FolderIcon />
        </IconButton>
        <IconButton
          aria-label="share"
          sx={{ "&:hover": { textAnchor: "green" } }}
        >
          <ShareIcon />
        </IconButton>
      </CardActions>
    </>
  );
};
