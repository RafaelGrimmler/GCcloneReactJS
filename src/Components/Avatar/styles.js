import styled from 'styled-components';
import Circle from '../../img/Avatar/Circle.svg'
import AvatarImage from '../../img/Avatar/AvatarImage.jpg'

export const Container = styled.div`
  width: 50px;
  height: 50px;
`;

export const Ring = styled.div`
    width: 100%;
    height: 100%;
    cursor: pointer;
    background-image: url(${Circle});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: -1.5px center;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.div`
    width: 71%;
    height: 71%;
    border-radius: 50%;
    background-image: url(${AvatarImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
`;
