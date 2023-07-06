import React from 'react';
import { Footer, Body, Header, WhoIsFlexas } from './containers';
import { Cards, Carousel, NavBar, Mixtape } from './components';
import './App.css';
import './index.css';

function App() {
  return (
    <div className="App --color-text">
      <NavBar />
      <WhoIsFlexas />
      <Carousel />
      <br></br>
      <Cards />
      <br></br>
      <Header />
      <Body />
      <br></br>
      <Mixtape />
      <Footer />
    </div>
  );
}

export default App;
