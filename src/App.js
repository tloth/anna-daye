import React from 'react';
import './App.css';
import styled from 'styled-components';
import { colours } from './theme';

import Header from './components/header';
import Slider from './components/slider';
import AllProducts from './components/allproducts';

const AppContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: ${colours.baseColour};
  color: ${colours.darkGreen};
  display: flex;
  align-items: center;
  flex-direction: column;
`

function App() {

  const [tamponsData, setTamponsData] = React.useState(null);

  const [plainTamponCount, setPlainTamponCount] = React.useState(6);
  const [cbdTamponCount, setCbdTamponCount] = React.useState(6);

  const [selectedSize, setSelectedSize] = React.useState(null);

  const [packageImageUrl, setPackageImageUrl] = React.useState(null);
  const [price, setPrice] = React.useState(null);
  const [currency, setCurrency] = React.useState(null);

  return (
    <AppContainer>
      <Header />
      <Slider tamponsData={tamponsData} setTamponsData={setTamponsData} plainTamponCount={plainTamponCount} setPlainTamponCount={setPlainTamponCount} cbdTamponCount={cbdTamponCount} setCbdTamponCount={setCbdTamponCount} selectedSize={selectedSize} setSelectedSize={setSelectedSize} packageImageUrl={packageImageUrl} setPackageImageUrl={setPackageImageUrl} price={price} setPrice={setPrice} currency={currency} setCurrency={setCurrency} />
      <AllProducts tamponsData={tamponsData} setTamponsData={setTamponsData} />
    </AppContainer>
  );
}

export default App;
