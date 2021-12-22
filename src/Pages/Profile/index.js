import React from 'react';
//import { useParams } from 'react-router';
import { Container } from './styles';

//import Profiles from '../../Profiles.json'
import Footer from '../../Components/General/Footer';
import Background from '../../Components/Profile/Background';

function Profile() {

    //let { id } = useParams();

    // const User = (id < Profiles.length && id >= 0 ) ? Profiles[id] : false

    return (
        <Container>
            <Background/>
            <Footer />
        </Container>
    );
}

export default Profile;