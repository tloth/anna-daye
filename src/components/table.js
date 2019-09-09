import React from 'react';
import styled from 'styled-components';
import { colours, fontSize, spacing, borders } from '../theme';

const TableOutline = styled.table`
    background-color: ${colours.baseColour};
    color: ${colours.darkGreen};
    max-width: 60vw; //THIS FUCKS IT UP THOUGH
    font-size: ${fontSize.small};
    border: ${borders.darkGreen};
    border-collapse: collapse;
    margin: ${spacing.medium}
`
const TableRow = styled.tr`
`
const TableHeading = styled.th`
    text-transform: uppercase;
    border: ${borders.darkGreen};
    padding: ${spacing.tiny};
`
const TableCell = styled.td`
    text-align: center;
    border: ${borders.darkGreen};
    padding: ${spacing.tiny};
`

const Table = () => {
    return (
        <TableOutline>
            <TableRow>
                <TableHeading>Plain/CBD-infused</TableHeading>
                <TableHeading>Small</TableHeading>
                <TableHeading>Regular</TableHeading>
            </TableRow>
            <TableRow>
                <TableCell>6/6</TableCell>
                <TableCell>£18</TableCell>
                <TableCell>£19</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>8/4</TableCell>
                <TableCell>£17</TableCell>
                <TableCell>£19</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>10/2</TableCell>
                <TableCell>£17</TableCell>
                <TableCell>£18</TableCell>
            </TableRow>
        </TableOutline>
    )
}

export default Table;