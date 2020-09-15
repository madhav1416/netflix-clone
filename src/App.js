import React, { useEffect } from "react";
import request from "./request";
import "./App.css";
import Row from "./Row";
import Header from "./Header";
import Banner from "./Banner";
function App() {
  return (
    <div className="app">
      <Header />
      <Banner fetchUrl={request.NetflixOriginal} />
      <Row
        title="NETFLIX ORIGINAL"
        fetchUrl={request.NetflixOriginal}
        poster={true}
      />
      <Row title="Trending Now" fetchUrl={request.Trending} poster={false} />
      <Row title="Top Rated" fetchUrl={request.TopRated} poster={false} />
      <Row title="Action Movie" fetchUrl={request.ActionMovie} poster={false} />
      <Row title="Comedy Movie" fetchUrl={request.ComedyMovie} poster={false} />
      <Row title="Horror Movie" fetchUrl={request.HorrorMovie} poster={false} />
      <Row
        title="Romance Movie"
        fetchUrl={request.RomanceMovie}
        poster={false}
      />
      <Row
        title="Documantries"
        fetchUrl={request.Documentaries}
        poster={false}
      />
    </div>
  );
}

export default App;
