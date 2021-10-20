import React, { useState } from 'react';
import axios from 'axios';
import { trackPromise } from 'react-promise-tracker';

import { Container } from '../Styled/SearchStyle';
import SearchForm from './SearchForm';
import Movies from './Movies';
import Spinner from './Spinner';
import NotFound from './NotFound';

function Search() {
  const [movies, setMovies] = useState([]);
  const [emptySearch, setEmptySearch] = useState(false);

  const handleResult = result => {
    setMovies(result);
    setEmptySearch(result.length === 0);
  };

  const searchMovies = (keyword) => {
    setMovies([]);

    trackPromise(
      axios
        .get(`https://itunes.apple.com/us/rss/topmovies/limit=100/json${keyword}`)
        .then(result => handleResult(result.data.items))
        .catch((error) => {
          console.log('we have received an error: ', error);
        }));
  };

  return (
    <Container>
      <SearchForm
        placeholder="Enter"
        buttonText="Search"
        onSubmit={value => searchMovies(value)}
      />
      { emptySearch && (<NotFound />) }
      <Spinner />
      <Movies items={movies} />
    </Container>
  )
}

export default Search;
