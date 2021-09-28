import React from 'react';
import { useParams } from 'react-router';
import { Container } from './styles';
import Profiles from '../../Profiles.json'

function Profile() {

    let { id } = useParams();

    const User = (id < Profiles.length && id >= 0 ) ? Profiles[id] : false

    return (
        <Container>
            {User ? (
            <div>
                <h1>{User.name}</h1>
                <h1>{User.name}</h1>
                <h1>{User.name}</h1>
                <h1>{User.name}</h1>
                <h1>{User.name}</h1>
                <h1>{User.name}</h1>
                <h1>{User.name}</h1>
                <h1>{User.name}</h1>
                <h1>{User.name}</h1>
                <h1>{User.name}</h1>
                <h1>{User.name}</h1>
                <h1>{User.name}</h1>
                <h1>{User.name}</h1>
                <h1>{User.name}</h1>
                <h1>{User.name}</h1>
                <h1>{User.name}</h1>
                <h1>{User.name}</h1>
                <h1>{User.name}</h1>
                <h1>{User.name}</h1>
                <h1>{User.name}</h1>
                <h1>{User.name}</h1>
                <h1>{User.name}</h1>
                <h1>{User.name}</h1>
                <h1>{User.name}</h1>
                <h1>{User.name}</h1>
                <h1>{User.name}</h1>
                <h1>{User.name}</h1>
                <h1>{User.name}</h1>
                <h1>{User.name}</h1>
                <h1>{User.name}</h1>
                <h1>{User.name}</h1>
                <h1>{User.name}</h1>
                <h1>{User.name}</h1>
                <h1>{User.name}</h1>
                <h1>{User.name}</h1>
                <h1>{User.name}</h1>
                <h1>{User.name}</h1>
                <h1>{User.name}</h1>
                <h1>{User.name}</h1>
                <h1>{User.name}</h1>
                <h1>{User.name}</h1>
                <h1>{User.name}</h1>
                <h1>{User.name}</h1>
                <h1>{User.name}</h1>
                <h1>{User.name}</h1>
                <h1>{User.name}</h1>
                <h1>{User.name}</h1>
                <h1>{User.name}</h1>
                <h1>{User.name}</h1>
                <h1>{User.name}</h1>
            </div>
            ) : (
                <div>
                    <h1>Falso</h1>
                    <h1>Falso</h1>
                    <h1>Falso</h1>
                    <h1>Falso</h1>
                    <h1>Falso</h1>
                    <h1>Falso</h1>
                    <h1>Falso</h1>
                    <h1>Falso</h1>
                    <h1>Falso</h1>
                    <h1>Falso</h1>
                    <h1>Falso</h1>
                    <h1>Falso</h1>
                    <h1>Falso</h1>
                    <h1>Falso</h1>
                    <h1>Falso</h1>
                    <h1>Falso</h1>
                </div>
            )}
        </Container>
    );
}

export default Profile;