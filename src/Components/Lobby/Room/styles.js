import styled from 'styled-components';

export const Container = styled.div`
    width: 232px;
    height: 281px;
    background: linear-gradient(180deg,rgba(2,182,202,0.1) 0,rgba(2,182,202,0.0) 100%),${props=>props.prime ? '#282a3e' : 'rgba(0, 0, 0, 0.05)'};
    border-radius: 8px;
    border: 1px solid ${props => props.prime ? '#2196FD' : 'rgba(125, 138, 150, 0.0)'};
    position: relative;

    &:hover{
        background: linear-gradient(180deg,rgba(2,182,202,0.09) 0,rgba(2,182,202,0.0) 100%),${props=>props.prime ? 'rgba(0, 0, 0, 0.05)' : 'rgba(0, 0, 0, 0.2)'};
        border: 1px solid ${props => props.prime ? '#2196FD' : 'rgba(125, 138, 150, 0.05)'};
        box-shadow: inset 0 0 ${props => props.prime ? '7' : '3'}px 0 black;
    }
`;

export const Flag = styled.div`
    position: absolute;
    width: 26px;
    height: 26px;
    border-top-left-radius: 8px;
    background-image: url('https://gamersclub.com.br/assets/images/flags/lobby/br.png');
    background-size: 26px;
    background-repeat: no-repeat;
    left: -1px;
`;
