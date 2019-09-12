import React from "react";

import FilterButtons from "./slider/FilterButtons";
import FilterSlider from "./slider/FilterSlider";
import SelectedProduct from "./slider/SelectedProduct";

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

  React.useEffect(() => {
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
  }, [selectedSize, plainTamponCount, cbdTamponCount]);

  return (
    <>
      <FilterButtons
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
      />
      {selectedSize ? (
        <>
          <FilterSlider
            plainTamponCount={plainTamponCount}
            setPlainTamponCount={setPlainTamponCount}
            cbdTamponCount={cbdTamponCount}
            setCbdTamponCount={setCbdTamponCount}
          />
          <SelectedProduct
            plainTamponCount={plainTamponCount}
            cbdTamponCount={cbdTamponCount}
            currency={currency}
            price={price}
            packageImageUrl={packageImageUrl}
          />
        </>
      ) : null}
    </>
  );
};

export default Slider;
