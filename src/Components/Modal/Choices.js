import React from "react";
import styled from "styled-components";

const ChoiceWrap = styled.div`
    max-width: 500px;
    margin: 0 auto;
    column-count: 2;
    column-gap: 15px;
`;

const ChoiceRadio = styled.input`
    cursor: pointer;
    margin-right: 5px;
`;

const ChoiceLabel = styled.label`
    cursor: pointer;
    display: block;
`;

export function Choices() {
    return (
        <>
        <h3>Выбирайте:</h3>
        </>
    )
}