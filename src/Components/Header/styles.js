import styled from 'styled-components';
import GClogo from '../../img/Header/GClogo.svg'
import SmallGCLogo from '../../img/Header/SmallGCLogo.svg'
import CSsoldier from '../../img/Header/HeaderCSSoldier.svg'
import ICONSignature from '../../img/Header/Signature.png'

export const Container = styled.header`
    width: 100%;
    height: 80px;
    z-index: 99;
    background-color: var(--main-bg-color);
    border-bottom: 1px solid var(--header-border-color);
    box-shadow: inset 0 -1px #454B56, 
              -10px 6px 16px -2px rgb(0, 0, 0),
              inset 0 1px #454B56;
    display: flex;
    justify-content: space-between;
    position: fixed;
`;

export const RightSide = styled.div`
    display: flex;
    height: 100%;
`;

export const Signature = styled.div`
    width: 89px;
    height: 78px;
    background: linear-gradient(135deg, rgba(195,71,101,.19),rgba(26,103,194,.32));
    border-right: 1px solid var(--header-border-color);
    border-left: 1px solid var(--header-border-color);
    border-bottom: 1px solid rgba(26,103,194,.32);
    transition: border-bottom-color 0.5s;
    cursor: pointer;
    position: relative;
    
    &:hover {
        border-bottom-color: #d6d6d6;
    }

    & div:nth-child(1) {
        height: 50%;
        background-image: url(${ICONSignature});
        background-repeat: no-repeat;
        background-size: 45%;
        background-position: center 12px;
    }

    & div:nth-child(2) {
        height: 50%;
        display: flex;
        justify-content: center;
        position: relative;
    }

    & div:nth-child(2) span {
        font-stretch: ultra-condensed;
        font-weight: bold;
        font-size: 11px;
        color: var(--header-font-color);
        position: absolute;
        top: 7px;
    }

    & div:nth-child(3){
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        transition: .5s;
    }

    & div:nth-child(3):hover {
        background-color: rgba(250, 250, 250, 0.05);
    }

    @media only screen and (max-width: 1175px){
        & {
        display: none;
        }
    }
`;

export const Points = styled.div`
    width: 128px;
    height: 78px;
    display: flex;
    background-color: var(--main-bg-color);
    border-right: 1px solid var(--header-border-color);
    border-bottom: 1px solid var(--main-bg-color);
    cursor: pointer;
    position: relative;
    transition: border-bottom-color 0.5s;

    &:hover {
        border-bottom-color: #d6d6d6;
    }

    & span {
        color: white;
        font-size: 12px;
        line-height: 20px;
        font-weight: bold;
        position: absolute;
        top: 5px;
    }

    @media only screen and (max-width: 1175px){
        & {
        display: none;
        }
    }
`;

export const PointsHover = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
    transition: .5s;
    top: 0;

    &:hover {
        background-color: rgba(250, 250, 250, 0.05);
    }
`;

export const GoldPoint = styled.div`
    width: 50%;
    height: 100%;
    
    & div:nth-child(1){
        width: 100%;
        height: 50%;
        background-image: url('https://assets.gamersclub.com.br/csgo-frontend/static/media/icon-soft-coin.d3c7e147.png');
        background-size: 28px;
        background-repeat: no-repeat;
        background-position: center 11px;
    }

    & div:nth-child(2){
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
     position: relative;
    }
`;

export const SilverPoint = styled.div`
    width: 50%;
    height: 100%;

    & div:nth-child(1){
        width: 100%;
        height: 50%;        
        background-image: url('https://assets.gamersclub.com.br/csgo-frontend/static/media/icon-hard-coin.d31c7fe1.png');
        background-size: 28px;
        background-repeat: no-repeat;
        background-position: center 11px;
    }

    & div:nth-child(2){
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
`;

export const ProfileBar = styled.div`
    width: 208px;
    height: 78px;
    background-color: var(--main-bg-color);
    border-right: 1px solid var(--header-border-color);
    border-bottom: 1px solid var(--main-bg-color);
    display: flex;
    justify-content: center;
    transition: border-bottom-color 0.5s;
    
    &:hover {
        border-bottom-color: #d6d6d6;
    }

    @media only screen and (max-width: 1175px){
        & {
            border-left: 1px solid var(--header-border-color);
        }
    }

    @media only screen and (max-width: 562px){
        & {
            display: none;
        }
    }
`;

export const ProfileAvatar = styled.div`
    width: 48px;
    height: 100%;
    display: flex;
    align-items: center;
`;

export const ProfileInformations = styled.div`
    width: 66px;
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 10px;
`;

export const ProfileInformationsContainer = styled.div`
    width: 100%;
    height: 53px;
`;

export const ProfileInformationsName = styled.div`
    width: 100%;
    height: 21px;
    color: #EFEFEF;
    font-size: 16px;
    display: flex;
    font-weight: bold;
    align-items: flex-end;
    overflow-x: hidden;
`;

export const ProfileLevelContainer = styled.div`
    width: 100%;
    height: 32px;
    display: flex;
`;

export const ProfileLevel = styled.div`
    height: 100%;
    width: 50%;
`;

export const ProfileBadge = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('https://gamersclub.com.br/assets/images/patentes/patenteless.png');
    background-size: 23px;
    background-repeat: no-repeat;
    background-position: center center;
`;

export const Menu = styled.div`
    width: 80px;
    height: 78px;
    border-right: 1px solid var(--header-border-color);
    border-bottom: 1px solid ${props=>props.bg ? 'rgba(44,151,222,.6)' : 'var(--main-bg-color)'};
    cursor: pointer;
    background: ${props=>props.bg ? 'linear-gradient(-180deg,rgba(44,151,222,0) 20%,rgba(44,151,222,.2));' : ''};

    @media only screen and (max-width: 562px){
        & {
            border-left: 1px solid var(--header-border-color);
        }
    }
`;

export const MenuSup = styled.div`
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const MenuInf = styled.div`
    height: 50%;
    display: flex;
    justify-content: center;
    position: relative;

    & span {
        font-stretch: ultra-condensed;
        font-weight: bold;
        font-size: 11px;
        color: var(--header-font-color);
        position: absolute;
        top: 7px;
    }
`;

export const MenuBar = styled.div`
    width: 25px;
    height: 2px;
    background-color: ${props=>props.bg};
    position: absolute;
    top: 58%;
    transition: 0.3s;

    &:after {
        content: '';
        width: 25px;
        height: 2px;
        background-color: white;
        position: absolute;
        top: ${props=>props.top}px;
        transform: rotate(${props=>props.rota});
        transition: 0.3s;
    }

    &:before {
        content: '';
        width: 25px;
        height: 2px;
        background-color: white;
        position: absolute;
        top: -${props=>props.top}px;
        transform: rotate(${props=>props.rotb});
        transition: 0.3s;
    }
`;

export const LeftSide = styled.div`
    display: flex;
    height: 100%;
`;

export const Logo = styled.div`
    width: 240px;
    height: 78px;
    background-color: white;
    border-bottom: 1px solid #2a3469;

    &:hover {
        border-bottom: 1px solid rgba(44,151,222,.6);
    }

    a div {
        width: 100%;
        height: 100%;
        background: linear-gradient(to right, #214470 10%, var(--main-bg-color));
    }

    a div:hover {
        background: linear-gradient(to right, #345580 10%, #214470);
    }

    a div div {
        width: 100%;
        height: 100%;
        background-image: url(${GClogo});
        background-size: 200px;
        background-position: center center;
        background-repeat: no-repeat;
    }

    a div div:hover {
        width: 100%;
        height: 100%;
        background-image: url(${GClogo});
        background-size: 200px;
        background-position: center center;
        background-repeat: no-repeat;
    }

    @media only screen and (max-width: 900px){
        & {
            width: 89px;
        }

        a div div {
            width: 100%;
            height: 100%;
            background-image: url(${SmallGCLogo});
            background-size: 50px;
            background-position: center center;
            background-repeat: no-repeat;
        }

        a div div:hover {
            width: 100%;
            height: 100%;
            background-image: url(${SmallGCLogo});
            background-size: 50px;
            background-position: center center;
            background-repeat: no-repeat;
        }
    }
`;

export const PlayNow = styled.div`
    height: 78px;
    width: 160px;
    border-bottom: 1px solid #b8c050;
    background: linear-gradient(to top, #98AE00, #c5d13d);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s;
    cursor: pointer;
    

    & span {
        font-size: 17px;
        font-weight: bold;
        font-stretch: ultra-condensed;
        line-height: 33px;
        padding-left: 5px;
        color: var(--header-font-color);
    }

    &:hover {
        background: linear-gradient(to top, #bcd606, #c5d13d);
        box-shadow: 0px -1px 5px #eaf573;
    }

    @media only screen and (max-width: 900px){
        & {
            width: 89px;
        }

        & span:nth-child(3){
            display: none;
        }

        & span:nth-child(2){
            font-size: 15px;
        }
    }
`;

export const HeaderCSSoldierSVG = styled.div`
    width: 30px;
    height: 30px;
    background-image: url(${CSsoldier});
    background-size: cover;
    border-right: 1px solid rgba(255, 255, 255, 0.3);
`;


// Responsive
// Responsive
// Responsive

export const MoreBlock = styled.div`
    display: none;
    width: 89px;
    height: 78px;
    border-right: 1px solid var(--header-border-color);
    background: linear-gradient(-180deg,rgba(44,151,222,0) 20%,rgba(44,151,222,.2));
    cursor: pointer;
    position: relative;

    @media only screen and (max-width: 1628px){
        & {
            display: block;
        }
    }
`;

export const MoreBlockSup = styled.div`
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    & span{
        color: white;
        font-size: 25px;
    }
`;

export const MoreBlockInf = styled.div`
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    & span{        
        font-stretch: ultra-condensed;
        font-weight: bold;
        font-size: 11px;
        color: var(--header-font-color);
        position: absolute;
        top: 7px;
    }
`;

export const MoreBlockLinks = styled.div`
    width: 100%;
    position: absolute;
    top: 100%;
    background-color: var(--main-bg-color);
    display: ${props=>props.display};
`;