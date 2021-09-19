import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import GlobalStyle from './Styles/styles'
import Header from './Components/Header'

// ROUTES
import Lobby from './Pages/Lobby'
import Profile from './Pages/Profile'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <GlobalStyle />

      <Route component = { Lobby }  path="/" exact />
      <Route component = { Profile }  path="/:id" exact />

    </BrowserRouter>
  );
}

export default App;
