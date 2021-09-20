import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import GlobalStyle from './Styles/styles'
import Header from './Components/Header'

// ROUTES
import Lobby from './Pages/Lobby'
import Profile from './Pages/Profile'

//Context
import { UserProvider } from './context/UserContext'

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Header />
        <GlobalStyle />

        <Route component = { Lobby }  path="/" exact />
        <Route component = { Profile }  path="/:id" exact />

      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
