import styled from 'styled-components';
import GClogo from '../../img/GClogo.svg'

export const Container = styled.header`
  width: 100vw;
  height: 80px;
  background-color: var(--main-bg-color);
  border-bottom: 1px solid var(--header-border-color);
  box-shadow: inset 0 -1px #454B56, 
              -10px 6px 16px -2px rgb(0, 0, 0);
`;

export const RightSide = styled.div`

`;

export const LeftSide = styled.div`
    height: 100%;
`;

export const Logo = styled.div`
    width: 240px;
    height: 100%;
    background-color: white;

    a div {
        width: 100%;
        height: 100%;
        background: linear-gradient(to right, #214470 10%, var(--main-bg-color));
    }

    a div div {
        width: 100%;
        height: 100%;
        background-image: url(${GClogo});
        background-size: 200px;
        background: ;
        background-position: center center;
        background-repeat: no-repeat;
    }
`;

