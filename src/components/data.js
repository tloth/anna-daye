import React from "react";
import styled from "styled-components";

import { borders, spacing, fontSize } from "../theme";
import { SizeButton } from "./buttons";

const PackageDisplay = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border: ${borders.darkYellow};
  width: 80vw;
  padding: 0.5em;
  margin: ${spacing.medium} auto;
  @media (min-width: 818px) {
    width: 654px;
  }
`;
const Package = styled.div`
  display: flex;
  border: ${borders.lightGreen};
  width: 100%;
  margin: 0.5em;
  padding: 1em;
  @media (max-width: 481px) {
    flex-direction: column;
  }
`;
const InfoDisplay = styled.div`
  display: flex;
  flex-direction: column;
`;
const PieceOfInfo = styled.p`
  font-size: ${fontSize.tiny};
`;
const Image = styled.img`
  max-height: 50vw;
  max-width: 50vw;
  @media (max-width: 481px) {
    margin: auto;
  }
  @media (min-width: 818px) {
    max-height: 409px;
    max-width: 409px;
  }
`;

const Data = ({ tamponsData }) => {
  return (
    <>
      <PackageDisplay>
        {tamponsData
          ? tamponsData.map(x => {
              return (
                <Package>
                  <Image src={x.productImage} />
                  <InfoDisplay>
                    <PieceOfInfo>
                      Contains {x.tampons[0].amount} plain tampons and{" "}
                      {x.tampons[1].amount} with {x.tampons[1].coating} coating.
                    </PieceOfInfo>
                    <PieceOfInfo>Size: {x.tampons[0].size}</PieceOfInfo>
                    <PieceOfInfo>
                      {x.price} {x.currency}
                    </PieceOfInfo>
                    <SizeButton label="order" />
                  </InfoDisplay>
                </Package>
              );
            })
          : null}
      </PackageDisplay>
    </>
  );
};

export default Data;
