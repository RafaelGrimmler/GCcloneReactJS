import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Ring, Image } from './styles';

function Avatar({ id }) {
    return (
        <Container>
            <Link to={`/${id}`}>
                <Ring>
                    <Image />
                </Ring>
            </Link>
        </Container>
    );
}

export default Avatar;