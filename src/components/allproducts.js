import React from "react";

import { ShowAllButton } from "./buttons";
import Data from "./data";
import Table from "./table";

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
