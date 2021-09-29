import styled from 'styled-components';
import ChatIcon from '../../img/Chat/chat.svg'
import SadFace from '../../img/Chat/sadface.svg'

export const Container = styled.div`
    width: 81px;
    height: 100%;
    margin-top: 79px;
    z-index: 99;
    position: fixed;
    right: 0;    
    background-image: linear-gradient(180deg,#353645,#353645 7%,#21212e 45%,#272835);
    border-left: 1px solid var(--header-border-color);
    box-shadow: -2px 2px 10px rgb(0 0 0 / 50%);
`;

export const MessageContainer = styled.div`
    width: 100%;
    height: 71px;
    background-color: #252633;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ChatIconContainer = styled.div`
    width: 39px;
    height: 39px;
    border-radius: 50%;
    background: linear-gradient(180deg, #3392ff, #3392ff 7%,#1462ba);
    cursor: pointer;
    box-shadow: 2.5px 2px 7px black;
    transition: filter 0.2s;

    &:hover {
        filter: brightness(1.2);
    }
`;

export const ChatIconB = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${ChatIcon});
    background-size: 22px;
    background-position: 10px center;
    background-repeat: no-repeat;
`;

export const ChatSituationContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

export const ChatSituation = styled.div`
    width: 100%;
    height: 71px;
    display: block;
    position: absolute;
    top: 40%;
    text-align: center;

    & small {
        color: #6E708D;
        font-size: 12px;
        font-weight: bold;
        line-height: 0px;
        font-stretch: ultra-condensed;
    }
`;

export const ChatSituationFace = styled.div`
    width: 100%;
    height: 70px;
    background-image: url(${SadFace});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50px;
`;

