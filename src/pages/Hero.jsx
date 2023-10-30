import requests from "../api";
import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";
import Row from "../components/Row/Row";

const Hero = () => {
  return (
    <div>
      <Header />
      <Banner fetchUrl={requests.fetchNetflixOriginals} />
      <Row fetchURl={requests.fetchActionMovies} isPoster />
      <Row title="Trending Movies" fetchURl={requests.fetchTrending} />
      <Row title="Top Rated Movies" fetchURl={requests.fetchNetflixOriginals} />
      <Row title="Action Movies" fetchURl={requests.fetchTopRated} />
      <Row title="Comedy Movies" fetchURl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchURl={requests.fetchDocumentaries} />
    </div>
  );
};
export default Hero;
