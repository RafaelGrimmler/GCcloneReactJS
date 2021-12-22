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
`;

export const BackgroundImageEffect = styled.div`
  width: 100%;
  height: 600px;
  background: linear-gradient(to bottom, rgba(31, 32, 50, 0.81), #1F2032);
  position: absolute;
  top: 0;
`;
