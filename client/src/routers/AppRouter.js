import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createBrowserHistory } from "history";
import DashboardPage from "../components/DashboardPage";
import NotFoundPage from "../components/NotFoundPage";

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <Fragment>
      <Routes>
        <Route path="/" element={<DashboardPage/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </Fragment>
  </Router>
);

export default AppRouter;
