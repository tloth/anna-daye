import React from 'react';
import styled from 'styled-components';
import { colours, fontSize, spacing, borders } from '../theme';

import {ShowAllButton} from './buttons';
import Data from './data';

const TableOutline = styled.table`
    background-color: ${colours.baseColour};
    color: ${colours.darkGreen};
    font-size: ${fontSize.small};
    border: ${borders.darkGreen};
    border-collapse: collapse;
    margin: ${spacing.medium} auto;
`
const TableRow = styled.tr`
`
const TableHeading = styled.th`
    text-transform: uppercase;
    border: ${borders.darkGreen};
    padding: ${spacing.tiny};
    width: 10vw;
`
const TableCell = styled.td`
    text-align: center;
    border: ${borders.darkGreen};
    padding: ${spacing.tiny};
    width: 10vw;
`

const Table = ({tamponsData, setTamponsData}) => {
    const [showTable, setShowTable] = React.useState(false);

    return (
        <>
        <ShowAllButton label={"show all packages"} onClick={e => {setShowTable(true)}}/>
        {showTable ? 
        <>
        <Data tamponsData={tamponsData} setTamponsData={setTamponsData} />
        <TableOutline>
            <TableRow>
                <TableHeading>Plain/CBD-infused</TableHeading>
                <TableHeading>Small</TableHeading>
                <TableHeading>Regular</TableHeading>
            </TableRow>
            <TableRow>
                <TableHeading>6/6</TableHeading>
                <TableCell>£18</TableCell>
                <TableCell>£19</TableCell>
            </TableRow>
            <TableRow>
                <TableHeading>8/4</TableHeading>
                <TableCell>£17</TableCell>
                <TableCell>£19</TableCell>
            </TableRow>
            <TableRow>
                <TableHeading>10/2</TableHeading>
                <TableCell>£17</TableCell>
                <TableCell>£18</TableCell>
            </TableRow>
        </TableOutline> 
        </> : null}
        </>
    )
}

export default Table;