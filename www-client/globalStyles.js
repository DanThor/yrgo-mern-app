import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}

    *, *:before, *:after {
        box-sizing: border-box;
    }

    body {
        font-size: 16px;
        line-height: 24px;
        font-family: Georgia, 'Helvetica Neue', Helvetica, sans-serif;
        background-color: #fff;
    }

    h1, h2 {
        font-size: 1.5em;
        letter-spacing: 1px;
        line-height: 1em;
        color: #343434;
        padding: 10px 0;
        margin-top: 10px;

        @media screen and (min-width: 1024px) {
            font-size: 2em;
        }
    }

    button {
        margin: 0;
        border: 0;
        padding: 0;
        display: block;
        vertical-align: middle;
        white-space: normal;
        background: none;
        line-height: normal;
        font-size: 1em;
        font-family: inherit;
        color: inherit;
        overflow: visible;
    }

    #app {
        width: 100%;
        height: 100%;
    }
`;