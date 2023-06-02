import React, { useState } from "react";
import { useUser } from "../users/providers/UserProvider";
import { Navigate } from "react-router-dom";
import ROUTES from "../routes/routesModel";
import { Box, Container, Typography } from "@mui/material";
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
  const [count, setCount] = useState(0);

  if (!user || !user.isBusiness)
    return <Navigate replace to={ROUTES.SCRIPTS} />;

  return (
    <Container>
      <Box sx={{ mt: -2 }}>
        <Form
          onChange={rest.validateForm}
          onReset={rest.handleReset}
          onSubmit={rest.onSubmit}
          errors={value.errors}
        >
          {" "}
          <Typography sx={{ ml: 1 }}> CREATE YOUR SCRIPT</Typography>
          <Input
            data={value.data}
            lable="title"
            name="title"
            onChange={rest.handleChange}
            required={true}
            type="text"
          />
          {/* <SelectOption
            lable={"genre"}
            options={movieCategories}
            onChange={rest.handleChange}
            data={value.data}
            name="genre"
          />{" "}
          <SelectOption
            lable={"Length"}
            options={lengthOptions}
            name="length"
            onChange={rest.handleChange}
            data={value.data}
          /> */}
          <Input
            data={value.data}
            lable="genre"
            name="genre"
            onChange={rest.handleChange}
            required={true}
          />
          <Input
            data={value.data}
            lable="length"
            name="length"
            onChange={rest.handleChange}
            required={true}
          />
          <Input
            data={value.data}
            lable="language"
            name="language"
            onChange={rest.handleChange}
            required={true}
          />
          <Input
            data={value.data}
            lable="another Screen writer"
            name="anotherScreenwriter"
            onChange={rest.handleChange}
            required={false}
          />
          <Input
            minRows={12}
            lable="Synopsis"
            required={true}
            data={value.data}
            name="synopsis"
            onChange={rest.handleChange}
          />
          <Input
            minRows={16}
            lable="script treatment"
            required={false}
            data={value.data}
            name="script_treatment"
            onChange={rest.handleChange}
          />
          <Input
            minRows={20}
            lable="full Script"
            required={false}
            data={value.data}
            name="fullScript"
            onChange={rest.handleChange}
          />
        </Form>
      </Box>
    </Container>
  );
};

export default CreateScriptPage;
