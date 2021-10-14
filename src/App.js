import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import GlobalStyle from './Styles/styles'
import Header from './Components/General/Header'
import Talkbar from './Components/General/Talkbar'

// ROUTES
import Lobby from './Pages/Lobby'
import Profile from './Pages/Profile'

//Context
import { UserProvider } from './context/UserContext'
import { ButtonProvider } from './context/LobbyButtonsContext'
import { SliderProvider } from './context/LobbySlidersContext'

function App() {
  return (
    <UserProvider>
      <ButtonProvider>
        <SliderProvider>

        
          <BrowserRouter>
            <Header />
            <Talkbar />
            <GlobalStyle />

            <Route component = { Lobby }  path="/" exact />
            <Route component = { Profile }  path="/:id" exact />
          </BrowserRouter>
          

        </SliderProvider>
      </ButtonProvider>
    </UserProvider>
  );
}

export default App;
