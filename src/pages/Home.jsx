import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const [ movies, setMovies ] = useState([])
  useEffect( () => {
    fetch(`http://localhost:4000/movies`)
    .then( r => r.json())
    .then( movieData => setMovies(movieData))
    .catch( error => console.error(error))
    }, [])
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>Home Page</h1>
        <ul>
          {movies.map( movie => (
            <li key={movie.id}>
            <MovieCard title={movie.title} id={movie.id}/>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default Home;
