import styled from 'styled-components';
import GClogo from '../../img/Header/GClogo.svg'
import CSsoldier from '../../img/Header/HeaderCSSoldier.svg'

export const Container = styled.header`
  width: 100vw;
  height: 80px;
  background-color: var(--main-bg-color);
  border-bottom: 1px solid var(--header-border-color);
  box-shadow: inset 0 -1px #454B56, 
              -10px 6px 16px -2px rgb(0, 0, 0),
              inset 0 1px #454B56;
`;

export const RightSide = styled.div`

`;

export const LeftSide = styled.div`
    display: flex;
    height: 100%;
`;

export const Logo = styled.div`
    width: 240px;
    height: 78px;
    background-color: white;

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
`;

export const HeaderCSSoldierSVG = styled.div`
    width: 30px;
    height: 30px;
    background-image: url(${CSsoldier});
    background-size: cover;
    border-right: 1px solid rgba(255, 255, 255, 0.3);
`;