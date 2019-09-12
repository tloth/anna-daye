import React from "react";
import styled from "styled-components";

import { colours, fontSize, spacing } from "../theme";
import { SizeButton } from "./buttons";
import { PlainTampon, CbdTampon } from "./tampons";

const RangeDisplay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .slider {
    -webkit-appearance: none;
    outline: none;
    background: ${colours.darkGreen};
    height: 0.15em;
    width: 20em;
    margin: ${spacing.medium};

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      height: 2.1em;
      width: 2.1em;
      background: url(https://svgshare.com/i/Et_.svg) no-repeat;
    }
    &::-moz-range-thumb {
      height: 2.1em;
      width: 2.1em;
      background: url(https://svgshare.com/i/Et_.svg) no-repeat;
    }
  }
`;
const FilterButtonDisplay = styled.section``;
const FilterSliderDisplay = styled.section``;
const TamponsDisplay = styled.div`
  display: flex;
  max-width: 80vw;
  margin: 1.5em auto;
`;
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

const Slider = ({
  tamponsData,
  setTamponsData,
  plainTamponCount,
  setPlainTamponCount,
  cbdTamponCount,
  setCbdTamponCount,
  selectedSize,
  setSelectedSize,
  packageImageUrl,
  setPackageImageUrl,
  price,
  setPrice,
  currency,
  setCurrency
}) => {
  React.useEffect(() => {
    fetch("https://front-end-test-bvhzjr6b6a-uc.a.run.app/")
      .then(result => result.json())
      .then(json => setTamponsData(json))
      .catch(err => console.log(err));
  }, []);

  const setTamponCounts = value => {
    setPlainTamponCount(parseInt(value, 10));
    setCbdTamponCount(12 - value);
  };

  React.useEffect(
    () => {
      if (tamponsData && selectedSize && plainTamponCount && cbdTamponCount) {
        // get all packages that match selected size
        const rightSizes = tamponsData.filter(
          x =>
            x.tampons[0].size === selectedSize &&
            x.tampons[0].size === x.tampons[1].size
        );
        // get the one package that matches the size and content
        const selectedPackage = rightSizes.filter(x => {
          return (
            x.tampons[0].amount === plainTamponCount &&
            x.tampons[1].amount === cbdTamponCount
          );
        });
        setPackageImageUrl(selectedPackage[0].productImage);
        setPrice(selectedPackage[0].price);
        setCurrency(selectedPackage[0].currency);
      }
    },
    [selectedSize, plainTamponCount, cbdTamponCount]
  );

  const currencySymbol = getCurrencySymbol(currency);

  return (
    <>
      <FilterButtonDisplay>
        <SizeButton
          label="small"
          onClick={e => {
            setSelectedSize(e.target.value);
          }}
        />
        <SizeButton
          label="regular"
          onClick={e => {
            setSelectedSize(e.target.value);
          }}
        />
      </FilterButtonDisplay>
      {selectedSize ? (
        <>
          <FilterSliderDisplay>
            <TamponsDisplay>
              {Array.from({ length: plainTamponCount }, (_, k) => (
                <PlainTampon key={k}/>
              ))}
              {Array.from({ length: cbdTamponCount }, (_, k) => (
                <CbdTampon key={k}/>
              ))}
            </TamponsDisplay>
            <RangeDisplay>
              <input
                type="range"
                min={6}
                max={10}
                value={plainTamponCount}
                step={2}
                className="slider"
                onChange={event => setTamponCounts(event.target.value)}
              />
            </RangeDisplay>
          </FilterSliderDisplay>
          <SelectedProductDisplay>
            <Text>Size: {selectedSize}</Text>
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
        </>
      ) : null}
    </>
  );
};

export default Slider;
