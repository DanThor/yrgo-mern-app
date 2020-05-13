import styled from "styled-components";

export const EntryFormStyled = styled.form`
    width: 100%;
    max-width: 400px;
    margin: 16px 16px 80px 0;

    label {
        font-size: 1em;
        margin-bottom: 8px;
    }

    input {
        width: 100%;
        padding: 16px;
        display: block;
        border: 0;
        background: #f0f0f0;
        margin-bottom: 16px;
    }

    button {
        display: inline-block;
        width: 80px;
        height: 32px;
        border: 1px solid #f0f0f0;
        background-color: #f0f0f0;
        color: #343434;
        margin-right: 16px;
        font-family: inherit;
        font-size: 1em;

        &:hover {
            background-color: #343434;
            color: #f0f0f0;
        }
    }
`;
