import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LevelCircle = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.bg};
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0.5px 0.5px 2px 0 black;

    & span {
        font-size: 12px;
        font-weight: bold;
        color: white;
        text-shadow: 0.5px 0.5px black;
    }
`;
