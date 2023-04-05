import React from "react";
import MuiCard from "@mui/material/Card";
import {
  Box,
  Button,
  CardActions,
  CardContent,
  IconButton,
  Popover,
  Typography,
  styled,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FolderIcon from "@mui/icons-material/Folder";

import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Card = ({ card }) => {
  // const ExpandMore = styled((props) => {
  //   const { expand, ...other } = props;
  //   return <IconButton {...other} />;
  // })(({ theme, expand }) => ({
  //   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  //   marginLeft: "auto",
  //   transition: theme.transitions.create("transform", {
  //     duration: theme.transitions.duration.shortest,
  //   }),
  // }));

  return (
    <Box sx={{ mt: 8 }}>
      <MuiCard sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {card.title}
          </Typography>
          <Typography variant="h5" component="div">
            {card.genre} - {card.length}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Publisher: {card.publisher}
          </Typography>
          <Typography variant="body2">
            <Typography
              variant="span"
              sx={{ fontSize: 15, fontWeight: "bold" }}
            >
              {" "}
              Synopsis:{" "}
            </Typography>
            {card.synopsis}
          </Typography>
        </CardContent>
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

        {/* <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron
              and set aside for 10 minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
              over medium-high heat. Add chicken, shrimp and chorizo, and cook,
              stirring occasionally until lightly browned, 6 to 8 minutes.
              Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add pimentón, bay leaves, garlic,
              tomatoes, onion, salt and pepper, and cook, stirring often until
              thickened and fragrant, about 10 minutes. Add saffron broth and
              remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes
              and peppers, and cook without stirring, until most of the liquid
              is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
              reserved shrimp and mussels, tucking them down into the rice, and
              cook again without stirring, until mussels have opened and rice is
              just tender, 5 to 7 minutes more. (Discard any mussels that
              don&apos;t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then
              serve.
            </Typography>
          </CardContent>
        </Collapse> */}
      </MuiCard>
    </Box>
  );
};

export default Card;
