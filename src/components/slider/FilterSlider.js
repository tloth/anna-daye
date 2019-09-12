import React from "react";
import styled from "styled-components";

import { colours, fontSize, spacing } from "../../theme";
import { PlainTampon, CbdTampon } from "../common/tampons";

const SmallText = styled.p`
  color: ${colours.darkGreen};
  font-size: ${fontSize.tiny};
  text-align: center;
  margin: 0 auto 2em auto;
`;
const TamponsDisplay = styled.div`
  display: flex;
  max-width: 80vw;
  margin: 1.5em auto;
`;
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

const FilterSlider = ({
  plainTamponCount,
  setPlainTamponCount,
  cbdTamponCount,
  setCbdTamponCount
}) => {
  const setTamponCounts = value => {
    setPlainTamponCount(parseInt(value, 10));
    setCbdTamponCount(12 - value);
  };

  return (
    <>
      <SmallText>
        Select package content: <br></br> plain | CBD-infused
      </SmallText>
      <TamponsDisplay>
        {Array.from({ length: plainTamponCount }, (_, k) => (
          <PlainTampon key={k} />
        ))}
        {Array.from({ length: cbdTamponCount }, (_, k) => (
          <CbdTampon key={k} />
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
    </>
  );
};

export default FilterSlider;
