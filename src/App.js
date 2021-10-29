
import './App.css';
import Banner from './Banner';
import Nav from './Nav';
import requests from './requests';
import Row from './Row';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner />
     <Row title="NETFLIX ORIGNALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
     <Row  title="Trending Now"fetchUrl = {requests.fetchTrending
    }  />
     <Row title="TOP RATED MOVIES" fetchUrl={requests.fetchTopRatedMovies} />
     <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
     <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
     <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
     <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies} />
     <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />

    </div>
  );
}

export default App;
