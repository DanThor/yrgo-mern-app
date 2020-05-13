import styled from "styled-components";

export const UserEntryStyled = styled.div`
    background-color: #f9f9f9;
    width: 100%;
    padding: 16px;
    margin-bottom: 16px;
`;

export const UserEntryVideoStyled = styled.div`
    position: relative;
    width: 100%;
    margin: 0;

    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    &:after {
        content: "";
        display: block;
        padding-bottom: 56.25%;
    }
`;

export const UserEntryFooterStyled = styled.div`
    position: relative;
    display: flex;
    flex-flow: row wrap;
    padding-top: 16px;
`;

export const UserEntryInfoStyled = styled.div`
    width: 100%;
    font-size: 0.8em;
    line-height: 1.4em;
    display: flex;
    justify-content: space-between;
    margin-top: auto;
    margin-bottom: 4px;
`;

export const UserEntryCommentStyled = styled.div`
    width: 100%;
    min-height: 1em;
    margin-top: 0;
    margin-right: 70px;
`;

export const UserEntryDeleteBtnStyled = styled.button`
    position: absolute;
    top: 12px;
    right: 35px;
    width: 30px;
    height: 30px;

    svg {
        width: 100%;
        height: 100%;
    }
`;

export const UserEntryLikeBtnStyled = styled.button`
    position: absolute;
    top: 12px;
    right: 0;
    width: 30px;
    height: 30px;

    svg {
        width: 100%;
        height: 100%;
        transition: fill 0.1s ease-in-out;
    }
`;
