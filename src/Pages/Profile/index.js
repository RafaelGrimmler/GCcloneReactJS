import React from 'react';
import { useParams } from 'react-router';
import { Container } from './styles';

function Profile() {

    let { id } = useParams();

    console.log(id);

    return (
        <Container>
            <h1>{id}</h1>
            <h1>{id}</h1>
            <h1>{id}</h1>
            <h1>{id}</h1>
            <h1>{id}</h1>
            <h1>{id}</h1>
            <h1>{id}</h1>
            <h1>{id}</h1>
            <h1>{id}</h1>
            <h1>{id}</h1>
            <h1>{id}</h1>
            <h1>{id}</h1>
            <h1>{id}</h1>
            <h1>{id}</h1>
            <h1>{id}</h1>
            <h1>{id}</h1>
            <h1>{id}</h1>
            <h1>{id}</h1>
            <h1>{id}</h1>
            <h1>{id}</h1>
            <h1>{id}</h1>
            <h1>{id}</h1>
        </Container>
    );
}

export default Profile;