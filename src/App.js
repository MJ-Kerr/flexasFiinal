import React from 'react';
import { Footer, Body, Header, WhoIsFlexas } from './containers';
import { Cards, Carousel, NavBar } from './components';
import './App.css';
import './index.css';

function App() {
  return (
    <div className="App --color-text">
      <NavBar />
      <WhoIsFlexas />
      <Cards />
      <Body />
      <Carousel />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
