import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Movies from "../movies/Movies";
import "./Search.css";

const Search = () => {
  //const Old_MOVIES_API = `http://www.omdbapi.com/?i=tt3896198&apikey=d8dac6a8`;
  //const search = "https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false"
  //const MOVIES_DB_API = `https://api.themoviedb.org/3/movie/550?api_key=974253bce4d1b963fbb17879f0e9414c`;
  //const Trending-now = "https://api.themoviedb.org/3/movie/now_playing?api_key=974253bce4d1b963fbb17879f0e9414c"
  //const top-rated movies = "https://api.themoviedb.org/3/movie/top_rated?api_key=974253bce4d1b963fbb17879f0e9414c"
  const [movies, setMovies] = useState([]);
  const [search, setsearch] = useState("");
  const [query, setquery] = useState("harry potter");

  // const {addMovieToWatchlist} = useContext(GlobalContext);

  const unavailable_poster ="https://www.movienewz.com/wp-content/uploads/2014/07/poster-holder.jpg";

  useEffect(() => {
    const getMovies = async () => {
      const response = await fetch(`
      https://api.themoviedb.org/3/search/movie?api_key=974253bce4d1b963fbb17879f0e9414c&language=en-US&page=1&include_adult=false&query=${query}`);
      const data = await response.json();
      setMovies(data.results);
      console.log(data.results);
    };
    getMovies();
  }, [query]);

  const updateSearch = (e) => {
    setsearch(e.target.value);
    console.log(setsearch);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setquery(search);
  };

  return (
    <div>
      <form className="form-control" onSubmit={getSearch}>
        <input
          type="text"
          placeholder="Search"
          className="search-bar"
          onChange={updateSearch}
        />
        <button className="search-btn">Search</button>
      </form>
      <div className="movies">
        {movies.map((movie) => (
          <Movies
            key={movie.id}
            title={movie.title}
            image={movie.poster_path? `https://image.tmdb.org/t/p/w500${movie.poster_path}` :unavailable_poster}
            year={movie.release_date? movie.release_date.substring(0, 4): "-"}
            rate={movie.vote_average}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
