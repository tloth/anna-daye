import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { colours, fontFamily, fontSize } from './theme';
import slider from './slider.svg';

const AppContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: ${colours.baseColour};
  color: ${colours.darkGreen};
`




function App() {
  return (
    <AppContainer>
      <header>
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
      </header>
      </AppContainer>
  );
}

export default App;
