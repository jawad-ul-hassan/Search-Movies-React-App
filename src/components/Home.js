import React from 'react';
import Movies from './Movies';
import MovieSearch from './MovieSearch';

const Home = () => {
  return (
    <div>
      <MovieSearch />
      <Movies />
    </div>
  );
};

export default Home;
