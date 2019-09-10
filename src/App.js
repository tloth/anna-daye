import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { colours, fontFamily, fontSize } from './theme';

import Header from './components/header';
import Button from './components/button';
import Slider from './components/slider';
import Table from './components/table';


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
  return (
    <AppContainer>
      <Header />
      <Slider />
      <Table />

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
      </AppContainer>
  );
}

export default App;
