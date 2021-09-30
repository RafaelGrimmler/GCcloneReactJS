import styled from 'styled-components';
import TopBackground from '../../../img/Lobby/TopBackground.jpg'

export const Container = styled.div`
    width: calc(100% - 80px);
    height: 150px;
    border-bottom: 1px solid var(--header-border-color);
`;

export const Hidepart = styled.div`
    width: 100%;
    height: 79px;
`;

export const Contentcontainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    position: relative;
`;

export const Leftbackground = styled.div`
    height: 100%;
    width: 50%;
    background: linear-gradient(to right, #1C1D2C, rgba(0,0,0, 0.99));
`;

export const Rightbackground = styled.div`
    height: 100%;
    width: 50%;
    background-image: url(${TopBackground});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    filter: contrast(1.55);
`;

export const Centralbackground = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(28, 29, 44, .88);
    display: flex;
    justify-content: center;
`;

export const Contentcenter = styled.div`
    width: 1200px;
    height: 100%;
    display: flex;
`;

export const Pagename = styled.div`
    width: 110px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    & h1 {
        color: white;
    }

`;


