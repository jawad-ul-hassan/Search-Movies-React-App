import React, { useContext } from 'react';
import moviesContext from './store/movies-context';
import Loader from './Loader';
import classes from './Movies.module.css';
import { Link } from 'react-router-dom';

export const unavailablePoster =
  'https://bmchurch.ca/wp-content/uploads/2018/03/Photo-unavailable-1.jpg';

const Movies = () => {
  const movieContext = useContext(moviesContext);

  if (movieContext.isLoading) {
    return <Loader />;
  }

  return (
    <section className={classes['section-movies']}>
      <div className={classes['movies-container']}>
        {movieContext.moviesData.map(movie => (
          <Link to={`/movies/${movie.imdbID}`} key={movie.imdbID}>
            <div className={classes.card}>
              <div className={classes['img-container']}>
                <img
                  src={
                    movie.Poster === 'N/A' ? unavailablePoster : movie.Poster
                  }
                  alt={movie.Title}
                />
              </div>
              <div className={classes.details}>
                <h2>{movie.Title}</h2>
                <p>{movie.Year}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
export default Movies;
