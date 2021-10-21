import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Container } from '../Styled/SearchStyle';
import Movies from './Movies';
import Spinner from './Spinner';

function Search() {
  const [movies, setMovies] = useState([]);

  const handleResult = result => {
    setMovies(result);
    console.log('___result', result);
  };

  useEffect(() => {
    setMovies([]);
    (async () =>{
      await axios
      .get(`https://itunes.apple.com/us/rss/topmovies/limit=100/json`)
      .then(result => handleResult(result.data.feed.entry))
      .catch((error) => {
        console.log('we have received an error: ', error);
      });
    })();
  }, []);

  return (
    <Container>
      <Spinner />
      <Movies items={movies} />
    </Container>
  )
}

export default Search;
