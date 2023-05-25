import React from "react";
import { useUser } from "../users/providers/UserProvider";
import { Navigate } from "react-router-dom";
import ROUTES from "../routes/routesModel";
import { Box, Container } from "@mui/material";
import Form from "../forms/compnents/Form";
import Input from "../forms/compnents/Input";

import useForm from "../forms/hooks/useForm";
import initialScriptForm from "../cards/helpers/initialScriptForm";
import createScriptSchema from "../cards/models/joiSchema";
import useCards from "../cards/hooks/useCards";
import SelectOption from "../forms/compnents/SelectOption";

const movieCategories = [
  "comedy",
  "drama",
  "horror",
  "Action",
  "Fantasy",
  "Mystery",
  "Romance",
  "Thriller",
  "Other",
];

const lengthOptions = ["Short", "Long", "Series", "Web Series"];

const CreateScriptPage = () => {
  const { user } = useUser();
  const { handleCreateCard } = useCards();
  const { value, ...rest } = useForm(
    initialScriptForm,
    createScriptSchema,
    handleCreateCard
  );

  if (!user || !user.isBusiness)
    return <Navigate replace to={ROUTES.SCRIPTS} />;
  return (
    <Container>
      <Box sx={{ mt: -2 }}>
        <Form
          onChange={rest.validateForm}
          onReset={rest.handleReset}
          onSubmit={rest.onSubmit}
        >
          <Input
            data={value.data}
            lable="title"
            name="title"
            onChange={rest.handleChange}
            required={true}
            type="text"
          />
          <SelectOption
            lable={"genre"}
            options={movieCategories}
            name="genre"
          />{" "}
          <Input
            data={value.data}
            lable="language"
            name="language"
            onChange={rest.handleChange}
            required={true}
          />
          <SelectOption
            lable={"Length"}
            options={lengthOptions}
            name="length"
          />
          <Input
            minRows={20}
            lable="Synopsis"
            required={true}
            data={value.data}
            name="synopsis"
            onChange={rest.handleChange}
          />
        </Form>
      </Box>
    </Container>
  );
};

export default CreateScriptPage;
