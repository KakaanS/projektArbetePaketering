import { useState } from "react";
import RecomendedMovies from "../component/RecomendedMovies";
import TrendingMovies from "../component/TrendingMovies";
import SearchBox from "../component/SearchBox";
import Navbar from "../component/ui/Navbar";
import MovieCard from "../component/ui/MovieCard";

const Home = () => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div>
      <Navbar />
      <SearchBox setSearchResults={setSearchResults} />
      {searchResults.length > 0 ? (
        <div>
          {searchResults.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div>
          <RecomendedMovies />
          <TrendingMovies />
        </div>
      )}
    </div>
  );
};

export default Home;
