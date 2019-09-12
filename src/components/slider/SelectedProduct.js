import React from "react";
import styled from "styled-components";

import { colours, fontSize, spacing } from "../../theme";
import { SizeButton } from "../common/buttons";

const SelectedProductDisplay = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 60vw;
  border: 2px dashed ${colours.darkYellow};
  padding: ${spacing.small};
  margin: auto;
`;
const SelectedProductImage = styled.img`
  display: flex;
  align-self: center;
  max-width: 20em;
`;
const Text = styled.p`
  color: ${colours.darkGreen};
  font-size: ${fontSize.medium};
  font-weight: 600;
`;

const getCurrencySymbol = currency => {
  return currency === "GBP" ? "£" : null;
};

const SelectedProduct = ({
  plainTamponCount,
  cbdTamponCount,
  currency,
  price,
  packageImageUrl
}) => {
  const currencySymbol = getCurrencySymbol(currency);

  return (
    <SelectedProductDisplay>
      <Text>
        {plainTamponCount} plain tampons & <br></br>
        {cbdTamponCount} CBD-infused tampons
      </Text>
      <Text>
        This package costs {currencySymbol || ""}
        {price}
        {!currencySymbol && currency}
      </Text>
      <SelectedProductImage src={packageImageUrl} />
      <SizeButton label="order" />
    </SelectedProductDisplay>
  );
};

export default SelectedProduct;
