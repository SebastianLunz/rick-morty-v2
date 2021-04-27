import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routes from "./components/constants/Routes";
import MainNavbar from "./components/navbar/MainNavbar";
import { Container } from "reactstrap";
import CharactersContainer from "./components/characters/CharactersContainer";
import Home from "./components/home/Home";
import PageHeader from "./components/header/PageHeader";
import PageFooter from "./components/footer/PageFooter";
import FavoritesContainer from "./components/favorites/FavoritesContainer";


function App() {
  return (
    <Router>
      <MainNavbar/>
      <Container fluid={true}>
        <PageHeader/>
        <Switch>
          <Route exact path={Routes.ROOT} render={() => <Home/>}/>
          <Route path={Routes.CHARACTER} render={() => <CharactersContainer/>}/>
          <Route path={Routes.FAVORITE} render={() => <FavoritesContainer/>}/>
        </Switch>
        <PageFooter/>
      </Container>
    </Router>
  );
}

export default App;
