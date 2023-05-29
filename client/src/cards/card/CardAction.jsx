import { Button, CardActions, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import { useUser } from "../../users/providers/UserProvider";
import CardDeleteDialog from "./CardDeleteDialog";
import useCards from "../hooks/useCards";

export const CardAction = ({ onDelete, cardId, cardUserId }) => {
  const [isDialogOpen, setDialog] = useState(false);
  const { user } = useUser();

  const { handleGetCards, handleDeleteCard } = useCards();

  useEffect(() => {
    handleGetCards();
  }, []);

  const onDeleteCard = async (cardId) => {
    await handleDeleteCard(cardId);
    await handleGetCards();
  };

  const handleDialog = (term) => {
    if (term === "open") return setDialog(true);
    setDialog(false);
  };

  // const handleDeleteCard = async () => {
  //   handleDialog();
  //   await onDelete(onDeleteCard);
  // };

  return (
    <>
      <CardActions sx={{ mt: 8 }}>
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
        {user && (user.isAdmin || user._id === cardUserId) && (
          <IconButton
            aria-label="delete project"
            onClick={() => handleDialog("open")}
          >
            <DeleteIcon />
          </IconButton>
        )}
      </CardActions>

      <CardDeleteDialog
        isDialogOpen={isDialogOpen}
        onChangeDialog={handleDialog}
        onDelete={onDeleteCard}
      />
    </>
  );
};
