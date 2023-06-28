import { Button, CardActions, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FolderIcon from "@mui/icons-material/Folder";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useUser } from "../../users/providers/UserProvider";
import CardDeleteDialog from "./CardDeleteDialog";
import useCards from "../hooks/useCards";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";

export const CardAction = ({ cardUserId, cardId, onDelete, onLike }) => {
  const [isDialogOpen, setDialog] = useState(false);
  const [isLike, setLike] = useState(null);
  const { user } = useUser();
  const navigate = useNavigate();

  const { handleGetCards, handleLikeCard, value } = useCards();
  const { cards } = value;

  useEffect(() => {
    handleGetCards();
  }, []);

  const handleDialog = (term) => {
    if (term === "open") return setDialog(true);
    setDialog(false);
  };

  // const handleEditCard = () => {
  //   navigate(ROUTES.EDIT_SCRIPT);
  //   console.log("edit");
  // };
  const handleDelete = () => {
    handleDialog();
    onDelete(cardId);
  };

  const handleLike = async () => {
    setLike((prev) => !prev);
    await handleLikeCard(cardId);
    // onLike();
  };

  return (
    <>
      <CardActions sx={{ mt: 8 }}>
        <Button
          size="small"
          onClick={() => navigate(`${ROUTES.SCRIPT_PAGE}/${cardId}`)}
        >
          Read More
        </Button>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        ></Typography>

        <IconButton
          sx={{ color: isLike ? "red" : "" }}
          aria-label="add to favorites"
          onClick={handleLike}
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
        {user && (user.isAdmin || user._id === cardUserId) && (
          <IconButton
            aria-label="edit project"
            onClick={() => navigate(`${ROUTES.EDIT_SCRIPT}/${cardId}`)}
          >
            <EditIcon />
          </IconButton>
        )}
      </CardActions>

      <CardDeleteDialog
        isDialogOpen={isDialogOpen}
        onChangeDialog={handleDialog}
        onDelete={handleDelete}
      />
    </>
  );
};
