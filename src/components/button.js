import React from 'react';
import styled from 'styled-components';
import { colours, fontSize, fontFamily, spacing, borders } from '../theme';

const StyledButton = styled.button`
    background-color: ${colours.baseColour};
    border: ${borders.darkGreen};
    padding: ${spacing.tiny};
    font-family: ${fontFamily.baseFont};
    font-size: ${fontSize.small};
    color: ${colours.darkGreen};
    text-transform: uppercase;

    :hover {
        color: ${colours.baseColour};
        background-color: ${colours.darkGreen};
    }
`

const Button = ({ label }) => {
    return <StyledButton>{label}</StyledButton>
}

export default Button;