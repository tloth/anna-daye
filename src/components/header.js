import React from 'react';
import styled from 'styled-components';
import {fontFamily, fontSize, colours, spacing} from '../theme';

const HeaderContainer = styled.section`
    display: flex;
    justify-content: space-between;
    padding: ${spacing.tiny};
    font-size: ${fontSize.medium};
`
// not sure what to call the titles to keep it semantic, they are not navigation nor headings
const Title = styled.p`
    font-family: ${fontFamily.titleFont};
    color: ${colours.darkYellow};
`
const PageTitle = styled.p`
    font-family: ${fontFamily.baseFont};
    color: ${colours.darkGreen};
    text-transform: uppercase;
`

const Header = () => {
    return (
        <HeaderContainer>
            <Title>Daye</Title>
            <PageTitle>Tampons</PageTitle>
        </HeaderContainer>
    )
}

export default Header;