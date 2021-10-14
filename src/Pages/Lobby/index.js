import React from 'react';

import { Container } from './styles';

// Components
import Setgamebar from '../../Components/Lobby/Setgamebar';
import Maincontent from '../../Components/Lobby/Maincontent';
import Footer from '../../Components/General/Footer'

function Lobby() {

    return (
        <Container>
            <Setgamebar />
            <Maincontent />
            <Footer />
        </Container>
    );
}

export default Lobby;