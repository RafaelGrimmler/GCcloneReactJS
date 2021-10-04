import React from 'react';

import { Container } from './styles';

// Components
import Setgamebar from '../../Components/Lobby/Setgamebar';
import Maincontent from '../../Components/Lobby/Maincontent';

//Context
import { UserProvider } from '../../context/LobbyButtonsContext'

function Lobby() {
    return (
        <UserProvider>
            <Container>
                <Setgamebar />
                <Maincontent />
            </Container>
        </UserProvider>
    );
}

export default Lobby;