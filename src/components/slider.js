import React from 'react';
import styled from 'styled-components';
import { colours, fontFamily, fontSize, spacing, borders } from '../theme';

import Button from './button';

const SliderDisplay = styled.section`
`
const ButtonDisplay = styled.section`
`
const SelectedProductDisplay = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;
    max-width: 60vw;
    border: 2px dashed ${colours.darkYellow};
    padding: ${spacing.small};
    margin: auto;
`
const SelectedProductImage = styled.img`
    display: flex;
    align-self: center;
    max-width: 20em;
`


const Slider = () => {
    const [plainTamponCount, setPlainTamponCount] = React.useState(6);
    const [cbdTamponCount, setCbdTamponCount] = React.useState(6);

    const [tamponsData, setTamponsData] = React.useState(null);

    const [selectedSize, setSelectedSize] = React.useState(null);

    const [packageImageUrl, setPackageImageUrl] = React.useState(null);
    const [price, setPrice] = React.useState(null);
    const [currency, setCurrency] = React.useState(null);

    React.useEffect(() => {
        fetch('https://front-end-test-bvhzjr6b6a-uc.a.run.app/')
            .then(result => result.json())
            .then(json => setTamponsData(json))
            .catch(err => console.log(err));
    }, [])
    console.log('tamponsData is ', tamponsData);

    const setTamponCounts = (value) => {
        setPlainTamponCount(parseInt(value, 10));
        setCbdTamponCount(12-value);
    }

    React.useEffect(() => {
        if (tamponsData && selectedSize && plainTamponCount && cbdTamponCount) {
        // get all packages that match selected size
        const rightSizes = tamponsData.filter(x => 
            (x.tampons[0].size === selectedSize) && (x.tampons[0].size === x.tampons[1].size)
        )
        console.log('rightSizes after size filter is ', rightSizes);
        console.log('counts are: ', plainTamponCount, cbdTamponCount);
    // get the one package that matches the size and content
        const selectedPackage = rightSizes.filter(x => {
            console.log('counts inside count filter are: ', plainTamponCount, cbdTamponCount);
            console.log('rightSizes inside count filter is ', rightSizes);
            console.log(x.tampons[0].amount, plainTamponCount, x.tampons[1].amount, cbdTamponCount);
            return (x.tampons[0].amount === plainTamponCount) && (x.tampons[1].amount === cbdTamponCount)
        }
        )
        console.log('here is the one: ', selectedPackage);

        setPackageImageUrl(selectedPackage[0].productImage);
        setPrice(selectedPackage[0].price);
        setCurrency(selectedPackage[0].currency);

        console.log('selectedSize 2 is ', selectedSize)
        }
    }, [selectedSize, plainTamponCount, cbdTamponCount])


return (
    <>
    <ButtonDisplay>
        <Button label="small" onClick={e => {setSelectedSize(e.target.value)}} />
        <Button label="regular" onClick={e => {setSelectedSize(e.target.value)}} />
    </ButtonDisplay>
    <SliderDisplay>
        <input type="range" min={6} max={10} value={plainTamponCount} step={2} onChange={event => setTamponCounts(event.target.value)} />
    </SliderDisplay>
    <SelectedProductDisplay>
        <h1>{plainTamponCount} plain tampons and {cbdTamponCount} CBD-infused tampons</h1>
        <h2>This package costs {price}{currency}</h2>
        <SelectedProductImage src={packageImageUrl} />
    </SelectedProductDisplay>
    </>
)

}

export default Slider;