import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Teko:wght@400;500;600&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        text-decoration: none;
    }

    html, body,  #root {
        height: 100%;
        font-family: 'Teko', sans-serif;
    }
    
    ul {
        list-style: none;
    }

    #root {
        --main-bg-color: #1E2033;
        --header-border-color: #454B56;
        --header-font-color: #EFEFEF;
    }
`;
