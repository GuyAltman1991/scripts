import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { useUser } from "../providers/UserProvider";

import useUsers from "../hooks/useUsers";
import Spinner from "../../components/Spinner";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";

const ProfilePage = () => {
  const { handleGetUser, isLoading, error } = useUsers();

  const { user } = useUser();
  useEffect(() => {
    handleGetUser();
  }, []);

  if (!user) return <Navigate replace to={ROUTES.SCRIPTS} />;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "80vh",
        alignItems: "center",
      }}
    >
      {isLoading && <Spinner />}
      {error && console.log(error)}
      {user && (
        <Card sx={{ minWidth: 345, minHeight: 400 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="240"
            image={user.imageUrl}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {user.name.firstName + " " + user.name.lastName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {user.email}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {user.phone}
            </Typography>
          </CardContent>
          <CardActions>
            {/* <Button size="small">Share</Button>
            <Button size="small">Learn More</Button> */}
          </CardActions>
        </Card>
      )}
    </Box>
  );
};

export default ProfilePage;
