import { useEffect, useState } from "react";
import "./row.css";
import instance from "../../instance";

const Row = ({ title, fetchURl, isPoster }) => {
  const base_url = "https://image.tmdb.org/t/p/original/";
  const [allMovies, setAllMovies] = useState([]);

  const fetchData = async () => {
    const { data } = await instance.get(fetchURl);
    setAllMovies(data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);
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
          />
        ))}
      </div>
    </div>
  );
};
export default Row;
