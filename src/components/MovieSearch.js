import React, { useContext } from 'react';
import moviesContext from './store/movies-context';
import classes from './MovieSearch.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const MovieSearch = () => {
  const movieContext = useContext(moviesContext);

  return (
    <form onSubmit={e => e.preventDefault()} className={classes.form}>
      <div className={classes['form-control']}>
        <input
          type="text"
          value={movieContext.query}
          onChange={e => movieContext.setQuery(e.target.value)}
          placeholder="Search Movies"
        />
        <div className={classes['search-icon']}>
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
      <div className={classes.error}>
        {movieContext.error.show && <p>{movieContext.error.msg}</p>}
      </div>
    </form>
  );
};

export default MovieSearch;
