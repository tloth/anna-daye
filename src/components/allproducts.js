import React from 'react';

import {ShowAllButton} from './buttons';
import Data from './data';
import Table from './table';

const AllProducts = ({tamponsData, setTamponsData}) => {
    const [showTable, setShowTable] = React.useState(false);

    return (
        <>
        { !showTable ? 
        <ShowAllButton label={"show all packages"} onClick={e => {setShowTable(true)}}/>
        : null}
        {showTable ? 
            <>
            <Data tamponsData={tamponsData} setTamponsData={setTamponsData} />
            <Table />
            </> 
        : null}
        </>
    )
}

export default AllProducts;