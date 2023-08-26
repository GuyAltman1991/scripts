import React, { useEffect } from "react";
import { useUser } from "../users/providers/UserProvider";
import { Navigate, useParams } from "react-router-dom";
import ROUTES from "../routes/routesModel";
import useCards from "../cards/hooks/useCards";
import useForm from "../forms/hooks/useForm";
import initialScriptForm from "../cards/helpers/initialScriptForm";
import createScriptSchema from "../cards/models/joiSchema";
import normlizeScriptCard from "../cards/helpers/normlizeScriptCard";
import mapToCardModel from "../cards/helpers/mapToCardModel";
import { Box, Container, Typography } from "@mui/material";
import Form from "../forms/compnents/Form";
import Input from "../forms/compnents/Input";
import Spinner from "../components/Spinner";
import Error from "../components/Error";
import useUsers from "../users/hooks/useUsers";
import axios from "axios";
import SelectOption from "../forms/compnents/SelectOption";

const EditScriptPage = () => {
  const {
    handleUpdateCard,
    handleGetCard,
    value: cardValue,
    isLoading,
    error,
  } = useCards();
  const { card } = cardValue;

  const { handleGetUser, isLoading: userIsLoading } = useUsers();
  const { cardId } = useParams();
  const { user } = useUser();

  const { value, ...rest } = useForm(
    initialScriptForm,
    createScriptSchema,
    () => {
      handleUpdateCard(card._id, {
        ...normlizeScriptCard({ ...value.data }),
        user_id: card.user_id,
      });
    }
  );

  useEffect(() => {
    axios.get("http://localhost:8181/cards/" + cardId).then((data) => {
      data = data.data;
      const modeledCard = mapToCardModel(data);
      rest.setData(modeledCard);
    });
    handleGetCard(cardId);
  }, []);

  const genreOptions = ["drama", "comedy", "horor", "action", "musical"];
  const lengthOptions = ["long", "short", "series"];

  if (!user && !card) return <Navigate replace to={ROUTES.ROOT} />;

  return (
    <>
      {!card && isLoading && <Spinner />}{" "}
      {error && <Error errorMessage={error} />}
      <Container>
        <Box sx={{ mt: -2 }}>
          {!card && (
            <p> there is no script in the database that match the request</p>
          )}
          {!isLoading && card && (
            <Form
              title="Edit Script"
              to={ROUTES.MY_SCRIPTS}
              onChange={rest.validateForm}
              onReset={rest.handleReset}
              onSubmit={rest.onSubmit}
              errors={value.errors}
            >
              {" "}
              <Typography sx={{ ml: 1 }}> EDIT YOUR SCRIPT</Typography>
              <Input
                data={value.data}
                lable="title"
                name="title"
                onChange={rest.handleChange}
                required={true}
                type="text"
              />
              <SelectOption
                data={value.data}
                options={genreOptions}
                name={"genre"}
                lable={"genre"}
                onChange={rest.handleChange}
              />
              <SelectOption
                data={value.data}
                options={lengthOptions}
                lable={"length"}
                name={"length"}
                onChange={rest.handleChange}
              />
              {/* <Input
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
              /> */}
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
                name="screenwriter"
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
          )}
        </Box>
      </Container>
    </>
  );
};

export default EditScriptPage;
