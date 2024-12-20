import {Link} from 'react-router-dom';

function MovieCard({title, id}) {
  
  return (
    <article>
        <h2>{title}</h2>
        <nav>
          <Link to={`/movie/${id}`}>
            View Info
          </Link>
        </nav>
    </article>
  );
};

export default MovieCard;