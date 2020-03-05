import React from "react";
import Navbar from "components/Navbar";
import * as S from "./App.styles";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { HOME, PRODUCTS } from "constants/routes";
import Home from "pages/Home";
import Products from "pages/Products";

interface Props {}

const App: React.FC<Props> = () => (
  <S.AppContainer>
    <Router>
      <Navbar />
      <Switch>
        <Route path={HOME} component={Home} exact />
        <Route path={`${PRODUCTS}/:pocId`} component={Products} />
        <Redirect to={HOME} />
      </Switch>
    </Router>
  </S.AppContainer>
);

export default App;
