import styled from 'styled-components';
import Circle from '../../../img/Lobby/Roomlevelcircle.svg'
import Primeiconp from '../../../img/Lobby/Primeicon.png'

export const Container = styled.div`
    width: 232px;
    height: 281px;
    background: linear-gradient(180deg,rgba(2,182,202,0.1) 0,rgba(2,182,202,0.0) 100%),${props=>props.prime ? '#282a3e' : 'rgba(0, 0, 0, 0.05)'};
    border-radius: 8px;
    border: 1px solid ${props => props.prime ? '#2196FD' : 'rgba(125, 138, 150, 0.0)'};
    position: relative;
    display: ${props => props.showprimerooms ? 'flex' : 'none'};
    justify-content: center;
    box-shadow: ${props => props.prime ? '0 0 10px rgba(33, 150, 253, 0.1)' : ''};

    &:hover{
        background: linear-gradient(180deg,rgba(2,182,202,0.09) 0,rgba(2,182,202,0.0) 100%),${props=>props.prime ? 'rgba(0, 0, 0, 0.05)' : 'rgba(0, 0, 0, 0.2)'};
        border: 1px solid ${props => props.prime ? '#2196FD' : 'rgba(125, 138, 150, 0.03)'};
        box-shadow: inset 0 0 ${props => props.prime ? '7' : '3'}px 0 black;
    }
`;

export const Flag = styled.div`
    position: absolute;
    width: 26px;
    height: 26px;
    border-top-left-radius: 8px;
    background-image: url('https://gamersclub.com.br/assets/images/flags/lobby/br.png');
    background-size: 26px;
    background-repeat: no-repeat;
    left: -1px;
`;

export const Levelcircle = styled.div`
    width: ${props=>props.prime ? `43px` : `35px`};
    height: ${props=>props.prime ? `43px` : `35px`};
    position: relative;
    top: -20px;
    border-radius: 50%;
    background-color: #1C1D2C;
    background-image: ${props=>props.prime ? `url(${Circle})` : ``};
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Levelcirclecontent = styled.div`
    width: 35px;
    height: 35px;
    background-color: ${props => props.bgc};
    border-radius: 50%;
    box-shadow: ${props=>props.prime ? `` : `0 3px 4px rgba(0,0,0,0.4)`};;
    display: flex;
    justify-content: center;
    align-items: center;

    & span {
        color: white;
        font-weight: bold;
        text-shadow: 0 1px black;
        font-size: 17px;
    }
`;

export const Primeicon = styled.div`
    width: 15px;
    height: 15px;
    background-image: url(${Primeiconp});
    position: absolute;
    bottom: 0px;
    right: 1px;

    display: ${props => props.prime ? 'block' : 'none'};
`;

export const Leadercontainer = styled.div`
    width: 80%;
    height: 18px;
    position: absolute;
    top: 32px;
    display: flex;
    justify-content: center;
    overflow: hidden;
    white-space: nowrap;    
    text-overflow: ellipsis;

    & h2 {
        font-size: 16px;
        color: white;
        overflow: hidden;
        white-space: nowrap;    
        text-overflow: ellipsis;
    }
`;

export const Playerscontainer = styled.div`
    width: 96%;
    height: 120px;
    position: absolute;
    top: 95px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 0px;
`;

export const Player = styled.div`
    height: 100%;
    position: relative;
    display: flex;
    
    &::before {
        content: '';
        height: 100%;
        width: 1px;
        background: linear-gradient(to bottom, rgba(144, 149, 153, 0.1), rgba(144, 149, 153, 0.01));
        position: absolute;
        left: 0;
    }

    &::after {
        display: ${props => props.br ? 'block' : 'none'};
        content: '';
        height: 100%;
        width: 1px;
        background-image: linear-gradient(to bottom, rgba(144, 149, 153, 0.1), rgba(144, 149, 153, 0.01));
        position: absolute;
        right: 0px;
    }
`;

