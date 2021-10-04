import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    height: 98px;
    margin: 25px 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Lobbyoptions = styled.div`
    width: 754.4px;
    height: 100%;
    border: 1px solid var(--header-border-color);
    border-radius: 4px;
    background-color: #2A2C3D;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Searchinlobby = styled.div`
    width: 240px;
    height: 100%;
    margin-left: 15px;
    border: 1px solid var(--header-border-color);
    border-radius: 4px;
    background-color: #2A2C3D;
`;

export const Selectfilters = styled.div`
    width: 403px;
    height: 64px;
    background-color: red;
    margin-left: 18px;
    border-right: 1px solid var(--header-border-color);
`;

export const Contentseparator = styled.div`
    height: 64px;
    width: 0;
    border-left: 1px solid var(--header-border-color);
`;

export const Rangefilters = styled.div`
    width: 253px;
    height: 64px;
    background-color: green;
    margin-right: 18px;
`;
