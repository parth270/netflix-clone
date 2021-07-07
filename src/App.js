import React from 'react';
import Row from './components/rows/Row';
import request from './request/request';
import Banner from './components/banner/Banner';
import Nav from './components/nav/Nav';

function App() {

  return (
    <React.Fragment>
      <Nav/>
      <Banner/>
      <Row title="NETFLIX ORIGNALS"  fetchUrl={request.fetchNetflix} isLarge={true} />
      <Row title="TRENDING NOW" fetchUrl={request.fetchTrending}/>
      <Row title="TOP RATED" fetchUrl={request.fetchTopRated} />
      <Row title="ACTION MOVIES" fetchUrl={request.fetchActionMovies} />
      <Row title="COMEDY MOVIES" fetchUrl={request.fetchComedyMovies} />
      <Row title="HORROR MOVIES" fetchUrl={request.fetchHorrorMovies} />
      <Row title="ROMANCE MOVIES" fetchUrl={request.fetchRomanceMovies} />
      <Row title="DOCUMENTARIES" fetchUrl={request.fetchDocumentaries} />
    </React.Fragment>
  );
}

export default App;

// 566f7b3c1cd2187add2283112c6a6ace
// databse:-https://netflix-clone-609c9-default-rtdb.firebaseio.com/