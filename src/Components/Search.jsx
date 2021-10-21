import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Container } from '../Styled/SearchStyle';
import Movies from './Movies';
import Spinner from './Spinner';

function Search() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleResult = result => {
    setMovies(result);
    setIsLoading(false);
    console.log('___result', result);
  };

  useEffect(() => {
    setMovies([]);
    setIsLoading(true);

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
      {isLoading ? <Spinner /> :null }
      <Movies items={movies} />
    </Container>
  )
}

export default Search;
