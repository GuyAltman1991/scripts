import React, { useEffect } from "react";
import { useUser } from "../users/providers/UserProvider";
import { Navigate, useNavigate, useParams } from "react-router-dom";
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

const EditScriptPage = () => {
  const {
    handleUpdateCard,
    handleGetCard,
    value: { card },
  } = useCards();

  const { handleGetUser, isLoading: userIsLoading } = useUsers();
  const { cardId } = useParams();
  const { user } = useUser();
  const navigate = useNavigate();

  console.log(card);

  useEffect(() => {
    handleGetUser();
    const fetchData = async () => {
      try {
        const data = await handleGetCard(cardId);
        return console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    // .then((data) => {
    //   console.log(data);
    //   if (user._id !== data.user_id._id) navigate(ROUTES.ROOT);
    //   const modeledCard = mapToCardModel(data);
    //   rest.setData(modeledCard);
    // });
  }, []);

  const { value, ...rest } = useForm(
    initialScriptForm,
    createScriptSchema,
    () => {
      handleUpdateCard(card._id, {
        ...normlizeScriptCard({ ...value.data }),
        bizNumber: card.bizNumber,
        user_id: card.user_id,
      });
    }
  );

  if (!user) return <Navigate replace to={ROUTES.ROOT} />;
  return (
    <Container>
      <Box sx={{ mt: -2 }}>
        {!user && card && (
          <p> there is no card in the database that match the request</p>
        )}
        {!userIsLoading && card && (
          <Form
            title="Edit Card"
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
        )}
      </Box>
    </Container>
  );
};

export default EditScriptPage;
