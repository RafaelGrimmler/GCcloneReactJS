import styled from 'styled-components';

export const Container = styled.div`
    width: 89px;
    height: 78px;
    border-right: 1px solid var(--header-border-color);
    border-bottom: 1px solid var(--main-bg-color);
    position: relative;
    
    transition: border-bottom-color 0.5s;

    &:hover {
        border-bottom-color: ${props=>props.bbt ? '#d6d6d6' : ''};
    }

    & div:nth-child(1) {
        height: 50%;
        background-image: url(${props=>props.svg});
        background-size: ${props=>props.svgzoom};
        background-repeat: no-repeat;
        background-position: center ${props=>props.svgpositionY};
    }

    & div:nth-child(2) {
        height: 50%;
        display: flex;
        justify-content: center;
        position: relative;
    }

    & div:nth-child(2) span {
        font-stretch: ultra-condensed;
        font-weight: bold;
        font-size: 11px;
        color: var(--header-font-color);
        position: absolute;
        top: 7px;
    }

    & div:nth-child(3){
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        transition: .5s;
    }

    & div:nth-child(3):hover {
        background-color: rgba(250, 250, 250, 0.05);
    }
`;
