import React from 'react';
import Row from './Row'
import "./App.css"
import requests from "./request"
function App() {
  return (
    <div className="App">
      <h1>I am NETFLIX, believe me!</h1>
      <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchURL={requests.fetchTrending}/>

    </div>
  );
}

export default App;
