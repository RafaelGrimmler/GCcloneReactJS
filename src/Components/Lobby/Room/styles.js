import styled from 'styled-components';
import Circle from '../../../img/Lobby/Roomlevelcircle.svg'
import Pcirclenprime from '../../../img/Lobby/Playercirclenonprime.svg'
import Primeiconp from '../../../img/Lobby/Primeicon.png'
import Playerimg from '../../../img/Lobby/Playerimg.jpg'
import { BsArrowRightCircle } from 'react-icons/bs';
import { TiGroup } from 'react-icons/ti'

export const Container = styled.div`
    width: 232px;
    height: 281px;
    background: linear-gradient(180deg,rgba(2,182,202,0.1) 0,rgba(2,182,202,0.0) 100%),${props=>props.prime ? '#282a3e' : 'rgba(0, 0, 0, 0.05)'};
    border-radius: 8px;
    border: 1px solid ${props => props.prime ? '#2196FD' : 'rgba(125, 138, 150, 0.0)'};
    position: relative;
    justify-content: center;
    box-shadow: ${props => props.prime ? '0 0 10px rgba(33, 150, 253, 0.1)' : ''};

    
    display: ${props => props.showprimerooms ? (props.showvacancies ? (props.showlevelrange ? 'flex' : 'none') : 'none') : 'none'};

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
    justify-content: center;
    
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

export const Playerimgbox = styled.div`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    position: absolute;
    top: -19px;
    left: 3px;
    border: 1px solid rgba(27, 22, 89, 0.4);
    background-color: #17182B;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${props => props.prime ? Circle : props.prime === null ? '' : Pcirclenprime});
    background-size: 39px;
    background-position: center center;
    background-repeat: no-repeat;
    z-index: 2;
    cursor: ${props => props.p ? 'pointer' : ''};

    &::after {
        content: '';
        width: 40px;
        height: 44px;
        border-radius: 50%;
        background-image: url(${props => props.prime && Primeiconp });
        background-repeat: no-repeat;
        background-size: 15px;
        background-position: 18px 25px;
        z-index: 4;
    }


    & div {
        width: 28px;
        height: 28px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 3;
        border-radius: 50%;
        background-image: url(${props => props.p ? Playerimg : ''});
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
    }
`;

export const Playerlevel = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${props => props.bgc};
    border-radius: 50%;
    top: 30px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 1px 1px black;
    border: 1px solid rgba(0,0,0,0.3);

    & span {
        color: #b8b8b8;
        font-size: 12px;
        font-weight: bold;
        text-shadow: 0 1px black;
    }
`;

export const Roomaction = styled.button`
    width: 207px;
    height: 40px;
    background-color: ${props => props.fullplayers ? '#131325' : '#8ea600'};
    border-radius: 5px;
    position: absolute;
    bottom: 10px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: ${props => props.fullplayers ? 'not-allowed': 'pointer'};

    & span {
        color: ${props => props.fullplayers ? 'rgba(255, 255, 255,0.3)': 'white'};
        font-weight: bold;
        font-size: 15px;
        margin-left: 5px;
    }

    &:hover {
        background-color: ${props => props.fullplayers ? '#131325': '#6E7F09'};;
        
    }
`;

export const Rooomactioniconopen = styled(BsArrowRightCircle)`
    width: 22px;
    height: 22px;
    color: white;
`;

export const Rooomactioniconclosed = styled(TiGroup)`
    width: 22px;
    height: 22px;
    color: rgba(255, 255, 255,0.3);
`;

