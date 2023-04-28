import React from "react";
import ROUTES from "./routesModel";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import LoginPage from "../users/pages/LoginPage";
import SignUpPage from "../users/pages/SignUpPage";
import ScriptsPage from "../pages/ScriptsPage";
import FavoritesPage from "../pages/FavoritesPage";
import WorthReadingPage from "../pages/WorthReadingPage";
import MyConnectionsPage from "../pages/MyConnectionsPage";
import MyScriptsPage from "../pages/MyScriptsPage";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<HomePage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.SCRIPTS} element={<ScriptsPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.SIGNUP} element={<SignUpPage />} />
      <Route path={ROUTES.FAVORITES} element={<FavoritesPage />} />
      <Route path={ROUTES.WORTH_READING} element={<WorthReadingPage />} />
      <Route path={ROUTES.MY_CONNECTIONS} element={<MyConnectionsPage />} />
      <Route path={ROUTES.MY_SCRIPTS} element={<MyScriptsPage />} />
    </Routes>
  );
};

export default Router;
