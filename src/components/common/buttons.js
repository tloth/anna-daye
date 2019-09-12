import React from 'react';
import styled from 'styled-components';

import { colours, fontSize, fontFamily, spacing, borders } from '../../theme';

const StyledSizeButton = styled.button`
    background-color: ${props => props.label === props.selectedSize ? colours.darkGreen : colours.baseColour};
    border: ${borders.darkGreen};
    padding: ${spacing.tiny};
    margin: ${spacing.small};
    font-family: ${fontFamily.baseFont};
    font-size: ${fontSize.small};
    color: ${props => props.label === props.selectedSize ? colours.baseColour : colours.darkGreen};
    text-transform: uppercase;
    cursor: pointer;

    :hover {
        color: ${colours.baseColour};
        background-color: ${colours.darkGreen};
    }
`
const StyledShowAllButton = styled.button`
    background-color: ${colours.baseColour};
    border: ${borders.dashed};
    padding: ${spacing.tiny};
    margin: ${spacing.small};
    font-family: ${fontFamily.baseFont};
    font-size: ${fontSize.tiny};
    color: ${colours.darkGreen};
    text-transform: uppercase;
    cursor: pointer;

    :hover {
        color: ${colours.baseColour};
        background-color: ${colours.darkGreen};
    }
`


const SizeButton = ({ label, onClick, selectedSize }) => {
    return <StyledSizeButton onClick={onClick} label={label} value={label} selectedSize={selectedSize}>{label}</StyledSizeButton>
}
const ShowAllButton = ({ label, onClick }) => {
    return <StyledShowAllButton onClick={onClick} label={label} value={label}>{label}</StyledShowAllButton>
}


export { SizeButton, ShowAllButton };