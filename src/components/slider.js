import React from 'react';
import styled from 'styled-components';
import { colours, fontFamily, fontSize, spacing } from '../theme';

import Button from './button';

const SliderDisplay = styled.section`
    
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

    const setTamponCounts = (value, size) => {
        setPlainTamponCount(value);
        setCbdTamponCount(12-value);
        // getCorrectSizeTampons(size);
    }

    const getCorrectSizeTampons = e => {

// get all packages that match selected size
            const rightSizes = tamponsData.filter(x => 
                (x.tampons[0].size === x.tampons[1].size) && (x.tampons[0].size === e.target.value)
            )
            console.log('after filter it is ', rightSizes);

// get the one package that matches the size and content
            const selectedPackage = rightSizes.filter(x => 
                (x.tampons[0].amount === plainTamponCount) && (x.tampons[1].amount === cbdTamponCount)
            )
            console.log('here is the one: ', selectedPackage);

            setPackageImageUrl(selectedPackage[0].productImage);
            setPrice(selectedPackage[0].price);
            setCurrency(selectedPackage[0].currency);

        }


    


return (
    <SliderDisplay>
        <Button label="regular" onClick={e => getCorrectSizeTampons(e)} />
        <input type="range" min={6} max={10} value={plainTamponCount} step={2} onChange={event => setTamponCounts(event.target.value)} />
        <h1>{plainTamponCount} plain tampons and {cbdTamponCount} CBD-infused tampons</h1>
        <h2>This package costs {price}{currency}</h2>
        <img src={packageImageUrl} />
    </SliderDisplay>
)

}

export default Slider;