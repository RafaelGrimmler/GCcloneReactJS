import styled from 'styled-components';
import Mainlobbysettingsnavigate from '../../../img/Lobby/Mainlobbysettingsnavigate.svg'

export const Container = styled.section`
    width: 100%;
    height: 98px;
    margin: 25px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    @media only screen and (max-width: 1295px){
        & {
            flex-wrap: wrap;
            height: 200px;
        }
    }

    @media only screen and (max-width: 543px){
        & {
            height: 250px;
        }
    }
`;

export const Lobbyoptions = styled.div`
    width: 754.4px;
    height: 100%;
    border: 1px solid rgba(120, 126, 138, 0.2);
    border-radius: 4px;
    background-color: #212335;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 1295px){
        & {
            width: 95%;
            margin-left: 20px;
            margin-right: 20px;
            display: block;
            position: relative;
        }
    }
`;

export const Searchinlobby = styled.div`
    width: 240px;
    height: 100%;
    margin-left: 15px;
    border: 1px solid var(--lobby-settings-border-color);
    border-radius: 4px;
    background-color: #212335;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 1295px){
        & {
            display: none;
        }
    }
`;

export const Searchincentercontainer = styled.div`
    width: 202px;
    height: 64px;
    margin-left: 18px;
    margin-right: 18px;
    position: relative;

    @media only screen and (max-width: 1295px){
        & {
            width: 100%;
            margin-left: 20px;
            margin-top: 15px;
        }
    }
`;

export const Navigatebar = styled.div`
    width: 100%;
    height: 100%;
    display: flex;

    & input {
        width: 180px;
        background-color: #2A2C3D;
        border: 1px solid #2A2C3D;
        border-right: none;
        border-top-left-radius: 3.5px;
        border-bottom-left-radius: 3.5px;
        padding-left: 10px;
        font-size: 15px;
        color: white;
        transition: border 0.4s;
    }

    & input:focus {
        border: 1px solid white;
        border-right: none;
    }
    
    & input::placeholder {
        font-weight: bold;
        font-stretch: extra-condensed;
        color: #9e9e9e;
    }

    & div {
        width: 22px;
        height: 100%;
        background-color: #2A2C3D;
        border: 1px solid #2A2C3D;
        border-left: none;
        transition: border 0.4s;
        border-top-right-radius: 3.5px;
        border-bottom-right-radius: 3.5px;
        background-image: url(${Mainlobbysettingsnavigate});
        background-position: -1px center;
        background-repeat: no-repeat;
        background-size: 16px;
    }

    & input:focus + div {
        border: 1px solid white;
        border-left: none;
    }

    @media only screen and (max-width: 1295px){
        & {
            width: 100%;
        }

        & input {
            width: 100%;
        }
    }

`;

export const Selectfilters = styled.div`
    width: 403px;
    height: 64px;
    margin-left: 18px;
    position: relative;

    
    @media only screen and (max-width: 1295px){
        & {
            width: 100%;
        }
    }

    @media only screen and (max-width: 543px){
        & {
            margin-bottom: 75px;
        }
    }
`;

export const Contentseparator = styled.div`
    height: 64px;
    width: 0;
    border-left: 1px solid var(--header-border-color);

    @media only screen and (max-width: 1295px){
        & {
            height: 0;
            border-left: none;
            border-bottom: 1px solid var(--header-border-color);
            position: absolute;
            top: 100px;
            margin-left: 18px;
            width: 90%;
        }
    }

    @media only screen and (max-width: 543px){
        & {
            top: 145px;
        }
    }
`;

export const Rangefilters = styled.div`
    width: 253px;
    height: 64px;
    margin-right: 18px;
    position: relative;

    @media only screen and (max-width: 1295px){
        & {
            margin-left: 20px;
            margin-top: 40px;
        }
    }
`;

export const Namefilter = styled.div`
    width: 100%;
    height: 15px;
    margin-bottom: 5px;

    & span {
        color: #bfbfbf;
        font-weight: bold;
        font-size: 13px;
        font-stretch: extra-condensed;
    }

    @media only screen and (max-width: 1295px){
        & {
            margin-top: ${props=>props.respmargt}px;
        }
    }
`;

export const Contentpart = styled.div`
    width: 100%;
    height: 39px;
    position: absolute;
    bottom: 0;

    @media only screen and (max-width: 1295px){
        & {
            width: 95%;
            position: relative;
            margin-top: 15px;
        }
    }
`;

export const Leftbutton = styled.button`
    height: 100%;
    background-color: ${props => props.selected ? '#2196FD' : '#242638'};
    color: white;
    border: none;
    padding: 0 10px;
    border-radius: 5px;
    margin-right: ${props => props.marginright };
    cursor: pointer;

    & span {
        color: ${props => props.selected ? 'white' : '#bfbfbf'};
        font-weight: bold;
        font-stretch: condensed;
    }

    @media only screen and (max-width: 543px){
        & {
            margin-top: 5px;
        }
    }
`;

export const Radioscontainer = styled.div`
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: start;
    align-items: center;

    & label {
        color: #bfbfbf;
        margin-left: 5px;
        margin-right: 10px;
        font-size: 14px;
        cursor: pointer;
    }
`;

export const Radiobutton = styled.input`
    width: 19px;
    height: 19px;
    background-color: #272736;
    -webkit-appearance: none;
    border: 2px solid var(--header-border-color);
    border-radius: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:checked {
        width: 19px;
        height: 19px;
        background-color: #217ccc;
        border-color: #2196FD;
    }

    &:checked:before {
        content: '';
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: white;
    }
`;

export const Levelrange = styled.div`
    width: 48px;
    height: 20px;
    background-color: #8BA40C;
    position: relative;
    margin-left: 8px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:before {
        content: '';
        width: 0;
        height: 0;
        border-bottom: 10px solid transparent;
        border-right: 10px solid #8BA40C;
        border-top: 10px solid transparent;
        position: absolute;
        left: -10px;
    }

    & span {
        color: white;
        font-size: 14px;
        font-stretch: extra-condensed;
    }
`;

export const Levelslidercontainer = styled.div`
    width: 100%;
    height: 15px;
    margin-top: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Inputslider = styled.input`
    width: 100%;
    height: 6px;
    position: absolute;
    pointer-events: none;
    -webkit-appearance: none;
    background-color: #212335;
    border-radius: 25px;
    z-index: 7;
    opacity: 0;

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        pointer-events: all;
        z-index: 7;
        cursor: grab;
        width: 17px;
        height: 17px;
        background-color: white;
        border-radius: 50%;
    }
`;

export const Sliderbar = styled.div`
    width: ${props=> props.width > 7 ? props.width * 4.8 : props.width * 5.2}%;
    height: 6px;
    position: absolute;
    background-color: #2196FD;
    border-radius: 25px;
    left: ${props=>props.left*4.9}%;
`;

export const Sliderpointer = styled.div`
    width: 14px;
    height: 14px;
    position: absolute;
    background-color: white;
    left: ${props=>props.left*4.7}%;
    border-radius: 50%;
    z-index: 6;
`;

export const Sliderbg = styled.div`
    width: 100%;
    height: 6px;
    position: absolute;
    background-color: #404359;
    border-radius: 25px;
`;