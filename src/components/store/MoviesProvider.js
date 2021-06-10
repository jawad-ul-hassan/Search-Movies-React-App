import React, { useState, useEffect } from 'react';
import moviesContext from './movies-context';

export const API_KEY = '3ab40153';
export const baseURL = `http://www.omdbapi.com/?apikey=${API_KEY}&`;

const MoviesProvider = props => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: '' });
  const [moviesData, setMoviesData] = useState([]);
  const [query, setQuery] = useState('');

  const fetchMoviesData = async url => {
    setIsLoading(true);
    const response = await fetch(url);
    const data = await response.json();

    if (data.Response === 'True') {
      setMoviesData(data.Search);
      setError({ show: false, msg: '' });
      setIsLoading(false);
    }
    if (data.Response === 'False') {
      setError({ show: true, msg: data.Error });
      setIsLoading(false);
    }
  };

  useEffect(() => {
    query.length > 0 && fetchMoviesData(`${baseURL}s=${query}`);
  }, [query]);

  return (
    <moviesContext.Provider
      value={{
        isLoading,
        setIsLoading,
        error,
        setError,
        moviesData,
        query,
        setQuery,
      }}
    >
      {props.children}
    </moviesContext.Provider>
  );
};

export default MoviesProvider;
