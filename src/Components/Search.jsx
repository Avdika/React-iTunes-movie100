import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import { Container } from '../Styled/SearchStyle';
import Movies from './Movies';
import Spinner from './Spinner';
import FilterForm from './FilterForm';
import { ActualData } from '../Context/index';

function Search() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const {ActData, setActData} = useContext(ActualData);

  const handleResult = result => {
    setActData(result);
    setMovies(result);
    setIsLoading(false);
    console.log('___result', result);
  };

  useEffect(() => {
    setActData([]);
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
      <FilterForm></FilterForm>
      {isLoading ? <Spinner /> :null }
      <Movies items={ActData || movies} />
    </Container>
  )
}

export default Search;
