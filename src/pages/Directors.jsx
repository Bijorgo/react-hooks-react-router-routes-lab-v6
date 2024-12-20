import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [ director, setDirector ] = useState([])
  useEffect(() => {
    fetch(`http://localhost:4000/directors`)
    .then( r => r.json())
    .then( directorData => {
      setDirector(directorData)
      
    })
    .catch(error => console.error(error))
  },[]);
  

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {director.map( director => (
          <article>
          <h2>{director.name}</h2>
          <ul>
          {director.movies.map( movie => (<li key={movie}>{movie}</li>))}
          </ul>
        </article>
        ))}
        
      </main>
    </>
  );
};

export default Directors;
