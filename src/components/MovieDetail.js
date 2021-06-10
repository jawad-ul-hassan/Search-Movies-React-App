import React, { useEffect, useState } from 'react';
import { baseURL } from './store/MoviesProvider';
import { Link, useParams } from 'react-router-dom';
import Loader from './Loader';
import classes from './MovieDetail.module.css';
import { unavailablePoster } from './Movies';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchMovie = async url => {
    setIsLoading(true);
    const response = await fetch(url);
    const data = await response.json();

    setMovie(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMovie(`${baseURL}i=${id}`);
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className={classes['movie-section']}>
      <div className={classes['movie-container']}>
        <div className={classes['movie']}>
          <div className={classes['movie-image']}>
            <img
              className={classes['movie-img']}
              src={movie.Poster === 'N/A' ? unavailablePoster : movie.Poster}
              alt=""
            />
          </div>
          <div className={classes['movie-info']}>
            <h1>{movie.Title}</h1>
            <small>
              {movie.Year} {movie.Rated} {movie.Runtime}
            </small>

            <div className={classes['movie-genre']}>{movie.Genre}</div>
            <p>{movie.Plot}</p>
            <div className={classes['movie-director']}>
              <span className={classes['line-head']}>Director :</span>
              <span>{movie.Director}</span>
            </div>
            <div className={classes['movie-director']}>
              <span className={classes['line-head']}>Language :</span>
              <span>{movie.Language}</span>
            </div>
            <div className={classes['movie-director']}>
              <span className={classes['line-head']}>imdbRating :</span>
              <span>{movie.imdbRating}</span>
            </div>
            <div className={classes['back-btn']}>
              <button>
                <Link to="/" className={classes['text-link']}>
                  Home
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetail;
