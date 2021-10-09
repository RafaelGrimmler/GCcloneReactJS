import styled from 'styled-components';

export const Container = styled.div`
    width: calc(100% - 80px);
    background-color: #1C1D2C;
    display: flex;
    justify-content: center;
    position: relative;
    padding-bottom: 40px;
`;

export const Wrapper = styled.div`
    width: 1100px;
    height: 100%;
    position: relative;
`;

export const Roomscontainer = styled.div`
    width: 100%;
    margin-top: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-row-gap: 40px;
    justify-items: center;


    @media only screen and (max-width: 1295px){
        & {
            margin-top: 45px;
            grid-template-columns: 1fr 1fr 1fr;
        }
    }

    @media only screen and (max-width: 900px){
        & {
            grid-template-columns: 1fr 1fr;
        }
    }

    @media only screen and (max-width: 615px){
        & {
            grid-template-columns: 1fr;
        }
    }
`;
