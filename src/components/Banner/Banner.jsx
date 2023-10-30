import { useEffect, useState } from "react";
import instance from "../../instance";
const base_url = "https://image.tmdb.org/t/p/original/";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import "./banner.css";

const Banner = ({ fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const fetchData = async () => {
    const { data } = await instance.get(fetchUrl);
    setMovies(data.results[Math.floor(Math.random() * data.results.length)]);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="banner">
        <div className="movie">
          <img
            className="bgimg"
            src={`${base_url}${movies?.backdrop_path}`}
            alt="bgimg"
          />
          <div className="container-fluid ">
            <div className="row">
              <div>
                <div className="content">
                  <h1>{movies?.name}</h1>
                  <p>{movies?.overview?.slice(0, 200)}</p>
                  <div className="buttons">
                    <a className="button" href="/">
                      <BsFillPlayFill size={25} />
                      Play
                    </a>
                    <a className="button" href="/">
                      <AiOutlinePlus size={25} />
                      My List
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Banner;
