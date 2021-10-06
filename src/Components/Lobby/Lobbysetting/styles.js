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
    position: relative;
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
        color: ${props => props.selected ? 'white' : '#bfbfbf'};
        font-weight: bold;
        font-stretch: condensed;
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


