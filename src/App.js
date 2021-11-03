import logo from "./logo.svg";
import "./App.css";
import Movie from "./components/Movie";
import React, {useState, useEffect} from "react";

import MovieForm from "./components/MovieForm";

function App() {

  const [movies, setMovies] = useState([]);
  // movies -> state로 변경해야

  const removeMovie = (id) => {
    setMovies(movies.filter(movie => {
      return movie.id !== id;
    }))
  }  

  const renderMovies = movies.length ? movies.map(movie =>{
    return (
      <Movie 
        movie={movie} 
        key={movie.id}
        removeMovie={removeMovie}
      />
    )
  }) : '추가된 영화가 없습니다.';
  const addMovie = (movie) => {
    setMovies([
      ...movies,
      movie
      ])
  }
  return (
    <div>
      <h1>Movie list</h1>
        <MovieForm addMovie={addMovie}/>
        {renderMovies}
    </div>
  )
}

export default App;
