import styled from 'styled-components';
import BackgroundImg from '../../../img/Profile/BackgroundImage.jpg'

export const Container = styled.div`
  width: calc(100% - 80px);
  position: relative;
`;

export const Topside = styled.div`
  height: 80px;
  width: 100%;
  background-color: green;
  position: relative;
`;

export const Botside = styled.div`
  width: 100%;
  background-color: #1F2032;
  position: relative;
`;

export const BackgroundImage = styled.div`
  height: 600px;
  width: 100%;
  background-image: url(${BackgroundImg});
  background-size: 100%;
  background-position-y: -100px;
  background-repeat: no-repeat;
  filter: contrast(1.23);

  @media only screen and (max-width: 1375px){
        & {
          background-size: 1300px;
        }
    }
`;

export const BackgroundImageEffect = styled.div`
  width: 100%;
  height: 600px;
  background: linear-gradient(to bottom, rgba(31, 32, 50, 0.81), #1F2032);
  position: absolute;
  top: 0;
`;

export const BackgroundMapBox = styled.div`
  width: 100%;
  height: 275px;
  position: absolute;
  top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BackgroundMapImage = styled.div`
  width: 1170px;
  height: 100%;
  background-image: url("https://static.gamersclub.com.br/fallback/player-cover.jpg");
  background-size: cover;
  background-repeat: no-repeat;

  @media only screen and (max-width: 1000px){
        & {
          width: 800px;
          background-size: 100%;
        }
    }
`;
