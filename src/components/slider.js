import React from 'react';
import styled from 'styled-components';
import { colours, fontFamily, fontSize, spacing } from '../theme';

const SliderDisplay = styled.section`
    
`

const Slider = () => {
    const [plainTamponCount, setPlainTamponCount] = React.useState(6);
    const [cbdTamponCount, setCbdTamponCount] = React.useState(6);

    const setTamponCounts = (value) => {
        setPlainTamponCount(value);
        setCbdTamponCount(12-value);
    }


return (
    <SliderDisplay>
        <input type="range" min={0} max={12} value={plainTamponCount} step={2} onChange={event => setTamponCounts(event.target.value)} />
        <h1>{plainTamponCount} plain tampons and {cbdTamponCount} CBD-infused tampons</h1>
    </SliderDisplay>
)

}

export default Slider;