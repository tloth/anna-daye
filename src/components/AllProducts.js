import React from "react";

import { ShowAllButton } from "./common/buttons";
import Data from "./allProducts/Data";
import Table from "./allProducts/Table";

const AllProducts = ({ tamponsData }) => {
  const [showTable, setShowTable] = React.useState(false);

  return (
    <>
      {!showTable ? (
        <ShowAllButton
          label={"show all packages"}
          onClick={e => {
            setShowTable(true);
          }}
        />
      ) : null}
      {showTable ? (
        <>
          <Data tamponsData={tamponsData} />
          <Table />
        </>
      ) : null}
    </>
  );
};

export default AllProducts;
