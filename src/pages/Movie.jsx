import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

//need to use useParams hook somewhere here "You'll need to use the useParams hook to get URL parameter data about which movie you want to render, 
//then use that data to fetch and render the appropriate movie."

function Movie() {
  const [ movie, setMovie ] = useState({});
  const [ genres, setGenres ] = useState([]);
  const params = useParams();
  const selectMovie = params.id;

  useEffect(()=>{
    fetch(`http://localhost:4000/movies/${selectMovie}`)
    .then(r => r.json())
    .then(movieData => {
      setMovie(movieData)
      setGenres(movieData.genres)
    })
    .catch(error => console.error(error));
  },[selectMovie]);
  

  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        {genres.map( (genre, index) => (
            <span key={index}>genre {genre}</span>    
        ))}
      </main>
    </>
  );
};

export default Movie;
