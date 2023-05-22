import React from "react";
import { useUser } from "../users/providers/UserProvider";
import { Navigate } from "react-router-dom";
import ROUTES from "../routes/routesModel";
import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import Form from "../forms/compnents/Form";
import Input from "../forms/compnents/Input";

import useForm from "../forms/hooks/useForm";
import initialScriptForm from "../cards/helpers/initialScriptForm";
import createScriptSchema from "../cards/models/joiSchema";
import useCards from "../cards/hooks/useCards";
import SelectOption from "../forms/compnents/SelectOption";

const CreateScriptPage = () => {
  const [selectedData, setselectedData] = React.useState("");
  const { user } = useUser();
  const { handleCreateCard } = useCards();
  const { value, ...rest } = useForm(
    initialScriptForm,
    createScriptSchema,
    handleCreateCard
  );

  const array1 = ["comedy", "drama", "horror"];
  const handleChange = (event) => {
    setselectedData(event.target.value);
  };

  if (!user || !user.isBusiness)
    return <Navigate replace to={ROUTES.SCRIPTS} />;
  return (
    <Container>
      <Box>
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
          <FormControl sx={{ width: "100%", mt: 1, mr: 1 }}>
            <InputLabel>genre *</InputLabel>

            <Select
              sx={{ width: "100%", ml: 1, mt: 1, mr: 2 }}
              value={selectedData}
              label="genre"
              onChange={handleChange}
            >
              <MenuItem value={"drama"}>drama</MenuItem>
              <MenuItem value={"comedy"}>comedy</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <Input
            data={value.data}
            lable="language"
            name="language"
            onChange={rest.handleChange}
            required={true}
          />
          <SelectOption
            onChange={rest.handleChange}
            lable={"select"}
            options={array1}
          />
        </Form>
      </Box>
    </Container>
  );
};

export default CreateScriptPage;
