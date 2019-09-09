import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { colours, fontFamily, fontSize } from './theme';
import slider from './slider.svg';

import Header from './components/header';
import Button from './components/button';
import Slider from './components/slider';


const AppContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: ${colours.baseColour};
  color: ${colours.darkGreen};
`




function App() {
  return (
    <AppContainer>
      <Header />
      <Button label="Small" />
      <Button label="Regular" />
      <Slider />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Daye
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <img src={slider} />
      </AppContainer>
  );
}

export default App;
