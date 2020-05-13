import styled from "styled-components";

export const MainStyled = styled.main`
    width: 80%;
    max-width: 1140px;
    padding: 32px 0;
    margin: 0 auto;
`;

export const UserEntriesStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    margin-bottom: 56px;

    @media screen and (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 16px;
    }
`;
