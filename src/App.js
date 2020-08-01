import React from 'react';
import Row from './Row'
import "./App.css"
import requests from "./request"
function App() {
  return (
    <div className="App">
      <h1>I am NETFLIX, believe me!</h1>
      <Row isLargeRow={true} title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals}/>
      <Row isLargeRow={false} title="Trending Now" fetchURL={requests.fetchTrending}/>
      <Row isLargeRow={false} title="Top Rated" fetchURL={requests.fetchTopRated}/>
      <Row isLargeRow={false} title="Action Movies" fetchURL={requests.fetchActionMovies}/>
      <Row isLargeRow={false} title="Comedy Movies" fetchURL={requests.fetchComedyMovies}/>
      <Row isLargeRow={false} title="Horror Movies" fetchURL={requests.fetchHorrorMovies}/>
      <Row isLargeRow={false} title="Romance Movies" fetchURL={requests.fetchRomanceMovies}/>
      <Row isLargeRow={false} title="Documentaries" fetchURL={requests.fetchDocumentaries}/>

    </div>
  );
}

export default App;
