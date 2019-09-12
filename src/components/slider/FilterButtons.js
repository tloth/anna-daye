import React from "react";
import styled from "styled-components";

import { SizeButton } from "../common/buttons";

const FilterButtonsDisplay = styled.section`
  display: flex;
`;

const FilterButtons = ({ selectedSize, setSelectedSize }) => {
  return (
    <FilterButtonsDisplay>
      <SizeButton
        label="small"
        onClick={e => {
          setSelectedSize(e.target.value);
        }}
        selectedSize={selectedSize}
      />
      <SizeButton
        label="regular"
        onClick={e => {
          setSelectedSize(e.target.value);
        }}
        selectedSize={selectedSize}
      />
    </FilterButtonsDisplay>
  );
};

export default FilterButtons;
