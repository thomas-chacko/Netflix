import { useEffect, useState } from "react";
import "./row.css";
import instance from "../../instance";
import YouTube from "react-youtube";
import axios from "axios";
const Row = ({ title, fetchURl, isPoster }) => {
  const base_url = "https://image.tmdb.org/t/p/original/";
  const [allMovies, setAllMovies] = useState([]);
  const [id, setId] = useState("");

  const fetchData = async () => {
    const { data } = await instance.get(fetchURl);
    setAllMovies(data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleTrailer = (movieId) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=47de2b9e8b2462b53975d18185ac40bf&language=en-US`
      )
      .then((responce) => {
        if (responce.data.results != 0) {
          setId(responce.data.results[0]);
        }
      });
  };
  console.log(id);
  return (
    <div className="rowContainer">
      <h1>{title}</h1>
      <div className="movie-row">
        {allMovies?.map((item, index) => (
          <img
            key={index}
            className={`movies ${isPoster && "poster"}`}
            src={`${base_url}${
              isPoster ? item.poster_path : item.backdrop_path
            }`}
            alt="No!"
            onClick={() => handleTrailer(item.id)}
          />
        ))}
      </div>
      {id && <YouTube videoId={id.key} opts={opts} />}
    </div>
  );
};
export default Row;
