import { useState } from "react";
import ListMovies from "./components/ListMovies";
// import SearchMoviesClass from "./components/SearchMoviesClass";
import SearchMovies from "./components/SearchMovies";

const App = () => {
    const [searchMovieText, setSearchMovieText] = useState('');   

  return (
      <div className='container text-center mt-24'>
        <h1>Movie App</h1>
        <SearchMovies setSearchMovieText={setSearchMovieText} />
        {/* <SearchMoviesClass setSearchMovieText={setSearchMovieText} /> */}
        <ListMovies searchMovieText={searchMovieText} />
        
      </div>
  );
}

export default App;
