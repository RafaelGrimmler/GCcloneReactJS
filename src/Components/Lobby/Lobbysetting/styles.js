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
    margin-left: 18px;
    position: relative;
`;

export const Contentseparator = styled.div`
    height: 64px;
    width: 0;
    border-left: 1px solid var(--header-border-color);
`;

export const Rangefilters = styled.div`
    width: 253px;
    height: 64px;
    margin-right: 18px;
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
`;

export const Contentpart = styled.div`
    width: 100%;
    height: 39px;
    position: absolute;
    bottom: 0;
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
        color: #bfbfbf;
        font-weight: bold;
        font-stretch: condensed;
    }
`;


