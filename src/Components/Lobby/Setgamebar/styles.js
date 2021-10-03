import styled, { keyframes } from 'styled-components';
import TopBackground from '../../../img/Lobby/TopBackground.jpg'
import TopAKX from '../../../img/Lobby/TopAKX.svg'
import Topcreatelobbybutton from '../../../img/Lobby/Topcreatelobbybutton.svg'
import Topjoinlobbybutton from '../../../img/Lobby/Topjoinlobbybutton.svg'
import Toprankedqualify from '../../../img/Lobby/Toprankedqualify.svg'

export const Container = styled.section`
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
    background-color: rgba(28, 29, 44, .85);
    display: flex;
    justify-content: center;
`;

export const Contentcenter = styled.div`
    width: 1200px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Pagename = styled.div`
    width: 110px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    & h1 {
        color: white;
        font-size: 29px;
    }

`;

const Akxanimation = keyframes`
    0% {
        transform: rotateY(0deg);
    }
    30% {
        transform: rotateY(0deg);
    }
    40% {
        transform: rotateY(180deg);
    }
    50%{
        transform: rotateY(0deg);
    }
    100% {
        transform: rotateY(0deg);
    }
`;

export const Akxcontainer = styled.div`
    width: 40px;
    height: 35px;
    margin-left: 13px;
    background-image: url(${TopAKX});
    background-size: 40px;
    background-position: center center;
    background-repeat: no-repeat;
    filter: saturate(0);
    animation: ${Akxanimation} 4s linear infinite ;
`;

export const Lobbyoptionscontainer = styled.div`
    width: 513px;
    height: 40px;
    margin-left: 15px;
    display: flex;
`;

export const Createlobbybutton = styled.button`
    width: 137px;
    height: 100%;
    background-color: #a4bf19;
    border: 1px solid #a4bf19;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.5s;

    & div {
        width: 30px;
        height: 25px;
        background-image: url(${Topcreatelobbybutton});
        background-size: 17px;
        background-repeat: no-repeat;
        background-position: center center;
    }

    & span {
        color: white;
        font-stretch: extra-condensed;
        font-weight: bold;
        font-size: 15px;
    }

    &:hover {
        background-color: #7D9503;
    }
`;

export const Joinlobbybutton = styled.div`
    width: 196px;
    height: 100%;
    background-color: #496cd6;
    border: 1px solid #6887e3;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-left: 10px;
    transition: background-color 0.5s;
    padding-right: 5px;

    & div {
        width: 30px;
        height: 25px;
        background-image: url(${Topjoinlobbybutton});
        background-size: 17px;
        background-repeat: no-repeat;
        background-position: center center;
    }

    & span {
        color: white;
        font-stretch: extra-condensed;
        font-weight: bold;
        font-size: 15px;
    }

    &:hover {
        background-color: #4040E7;
    }
`;

export const Rankedqualify = styled.div`
    width: 162px;
    height: 100%;
    background-color: #bd6531;
    border: 1px solid #bf7143;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-left: 10px;
    transition: background-color 0.5s;
    padding-right: 5px;

    & div {
        width: 30px;
        height: 25px;
        background-image: url(${Toprankedqualify});
        background-size: 25px;
        background-repeat: no-repeat;
        background-position: center center;
        margin-right: 3px;
    }

    & span {
        color: white;
        font-stretch: extra-condensed;
        font-weight: bold;
        font-size: 15px;
    }

    &:hover {
        background-color: #a64a14;
    }
`;

export const Currentgamescontainer = styled.div`
    width: 339px;
    height: 20px;
    margin-left: 15px;
    display: flex;

    & span {
        color: white;
        font-weight: bold;
        font-stretch: extra-condensed;
        font-size: 14px;
    }
`;

export const Gamesavailable = styled.div`
    width: 137.8px;
    height: 100%;
    margin-right: 5px;

    & span:nth-child(2) {
        background-color: indianred;
        padding-right: 10px;
        padding-left: 10px;
        padding-top: 1px;
        padding-bottom: 1px;
        font-size: 13px;
        border-radius: 50px;
        background-color: #8CA800;
        margin-left: 5px;
    }
`;

export const Gameslive = styled.div`
    width: 71.8px;
    height: 100%;    
    margin-right: 15px;

    & span:nth-child(2) {
        background-color: indianred;
        padding-right: 10px;
        padding-left: 10px;
        padding-top: 1px;
        padding-bottom: 1px;
        font-size: 13px;
        border-radius: 50px;
        background-color: #2196FD;
        margin-left: 5px;
    }
`;

export const Gamesvetoing = styled.div`
    width: 97.3px;
    height: 100%;
    
    & span:nth-child(2) {
        background-color: indianred;
        padding-right: 10px;
        padding-left: 10px;
        padding-top: 1px;
        padding-bottom: 1px;
        font-size: 13px;
        border-radius: 50px;
        background-color: #3C3E48;
        margin-left: 5px;
    }
`;

export const Litemode = styled.div`
    width: 132px;
    height: 24px;
    margin-left: 4px;
    padding-left: 15px;
    border-left: 1px solid #7d7d82;
    display: flex;
    align-items: center;
    justify-content: start;

    & span {
        color: white;
        font-weight: bold;
        font-size: 15px;
    }
`;

export const Litemodecheckcontainer = styled.div`
    width: 35px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
    position: relative;
    border-radius: 20px;
`;

export const Litemodecheck = styled.div`
    width: 15px;
    height: 15px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    left: 10%;
`;

export const Litemodeinput = styled.input`
    width: 100%;
    height: 100%;
    -webkit-appearance: none;
    border-radius: 40px;
    border: 1px solid var(--header-border-color);

    &:checked {
        background-color: #2196FD;
    }
`;


