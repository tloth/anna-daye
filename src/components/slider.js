import React from 'react';
import styled from 'styled-components';
import { colours, fontFamily, fontSize, spacing, borders } from '../theme';

import {SizeButton} from './buttons';
import {PlainTampon, CbdTampon} from './tampons';

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
`
const FilterButtonDisplay = styled.section`
`
const FilterSliderDisplay = styled.section`
`
const TamponsDisplay = styled.div`
    display: flex;
    max-width: 80vw;
    margin: 1.5em auto;
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
const Text = styled.p`
    color: ${colours.darkGreen};
    font-size: ${fontSize.medium};
    font-weight: 600;
`

// maybe call from a helpers folder
const getCurrencySymbol = (currency) => {
        return currency === 'GBP' ? '£' : null;
    }

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


    
    const currencySymbol = getCurrencySymbol(currency);
    

return (
    <>
    <FilterButtonDisplay>
        <SizeButton label="small" onClick={e => {setSelectedSize(e.target.value)}} />
        <SizeButton label="regular" onClick={e => {setSelectedSize(e.target.value)}} />
    </FilterButtonDisplay>
    {selectedSize ? <>
        <FilterSliderDisplay>
            <TamponsDisplay>
                {
                    Array.from({length: plainTamponCount}, (_, k) => (
                        <PlainTampon />
                    ))
                }
                {
                    Array.from({length: cbdTamponCount}, (_, k) => (
                        <CbdTampon />
                    ))
                }
            </TamponsDisplay>
            <RangeDisplay>
                <input type="range" min={6} max={10} value={plainTamponCount} step={2} className="slider" onChange={event => setTamponCounts(event.target.value)} />
            </RangeDisplay>
        </FilterSliderDisplay>
        <SelectedProductDisplay>
            <Text>Size: {selectedSize}</Text>
            <Text>{plainTamponCount} plain tampons & <br></br>{cbdTamponCount} CBD-infused tampons</Text>
            <Text>This package costs {currencySymbol || ''}{price}{!currencySymbol && currency}</Text>
            <SelectedProductImage src={packageImageUrl} />
            <SizeButton label="order" />
        </SelectedProductDisplay>
        </> : null}
    </>
)

}

export default Slider;