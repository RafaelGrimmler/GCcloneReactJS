import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body,  #root {
        height: 100%;
    }
    
    ul {
        list-style: none;
    }

    #root {
        --main-bg-color: #1E2033;
        --header-border-color: #292D30;
    }
`;
