import React from "react";
import { Container, Divider, ListItem, Stack, Typography } from "@mui/material";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";

const AboutPage = () => {
  return (
    <Container>
      <Typography variant="h1">HOW IT WORKS</Typography>{" "}
      <Stack spacing={2} sx={{ display: "flex", justifyContent: "center" }}>
        <ListItem>
          {" "}
          <Typography variant="h6" mt={3}>
            <HistoryEduIcon />
            If you are a screenwriter: <br />
            <Divider />
            1. Register on the website, <br />
            2. Upload a synopsis of the script (the entire script is also
            possible) <br />
            3. Wait for interested producers to contact you
          </Typography>
        </ListItem>

        <ListItem>
          {" "}
          <Typography variant="h6">
            <MovieCreationIcon />
            If you are a producer:
            <Divider />
            1. Register on the website, <br />
            2. Scroll through the scripts (there is an option to find out the
            genre in the search) <br />
            3. if you are interested in collaboration, you can contact the
            screenwriter
          </Typography>{" "}
        </ListItem>
      </Stack>
    </Container>
  );
};

export default AboutPage;
