import styled from 'styled-components';
import { BsGithub } from 'react-icons/bs'

export const Container = styled.div`
    width: calc(100% - 80px);
    padding-bottom: 45px;
    background-color: #1F2032;
    display: flex;
    justify-content: center;
`;

export const Wrapper = styled.div`
    width: 800px;
    margin-top: 45px;
    display: flex;
    align-items: center;
    flex-direction: column;

    & p {
        color: white;
    }
`;

export const Playingamersclub = styled.div`
    width: 336px;
    height: 45px;
    border-radius: 20px;
    border: 1px solid #2196FD;
    display: flex;
    align-items: center;
    justify-content: center;
    

    & span {
        color: white;
        font-stretch: condensed;
        font-weight: bold;
    }

    &:hover {
        background-color: rgba(33, 150, 253, 0.05);
    }

    @media only screen and (max-width: 450px){
        & {
            width: 250px;
        }
    }
`;

export const Aboutproject = styled.div`
    width: 800px;
    margin-top: 45px;
    text-align: center;

    & p a{
        color: rgba(255, 255, 255, 0.4);
        font-style: oblique;
    }

    & p a:hover{
        color: white;
    }

    @media only screen and (max-width: 1000px){
        & {
            width: 400px;
        }
    }

    @media only screen and (max-width: 500px){
        & {
            width: 320px;
        }
    }

    @media only screen and (max-width: 430px){
        & {
            width: 250px;
        }
    }
`;

export const Aboutme = styled.div`
    width: 800px;
    margin-top: 45px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    & h2 {
        color: white;
        font-size: 20px;
    }

    & div {
        margin-top: 5px;
        border-radius: 5px;
        padding: 2px 10px;
    }

    & a div p{
        color: rgba(255, 255, 255, 0.4);
        font-style: oblique;
    }

    & a div:hover p{
        color: white;
    }

    @media only screen and (max-width: 1000px){
        & {
            width: 400px;
        }
    }

    @media only screen and (max-width: 500px){
        & {
            width: 360px;
        }
    }
`;

export const Githubicon = styled(BsGithub)`
    width: 30px;
    height: 30px;
    color: rgba(0,0,0, 0.7);
    margin-top: 5px;
`;