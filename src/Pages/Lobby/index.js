import React from 'react';

import { Container } from './styles';

// Components
import Setgamebar from '../../Components/Lobby/Setgamebar';
import Maincontent from '../../Components/Lobby/Maincontent';

function Lobby() {
    return (
        <Container>
            <Setgamebar />
            <Maincontent />
        </Container>
    );
}

export default Lobby;