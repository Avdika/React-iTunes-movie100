import React, { useState, useContext } from 'react';

import Movie from './Movie';
import MovieDetails from './MovieDetails';
import { ActualData } from '../Context/actualDataContext';
import { Container } from '../Styles/RepositoriesStyle';

function Movies(props) {
  let { items } = props;
  const [isDetails, setIsDeteils] = useState(false);
  const [details, setDetails] = useState([]);
  const { filter } = useContext(ActualData);

  function showDetails(item) {
    setIsDeteils(!isDetails);
    setDetails(item);
  }

  if (items && filter) {
    items = items.filter(item => item['im:name'].label.toUpperCase().includes(filter.toUpperCase()));
  }

  return (
    <Container>
      {items?.map(item => (
        <Movie
          key={Date.now() + items.indexOf(item)}
          title={item['im:name']?.label}
          genre={item.category.attributes?.label}
          artist={item["im:artist"]?.label}
          releasedate={item["im:releaseDate"].attributes?.label}
          image={item['im:image'][0]?.label.replace(/(?<!\d)\d{2,2}x\d{2,2}(?!\d)/g, '300x300')}
          onClick={() => showDetails(item)}
        />
      ))}
      {isDetails &&
        <MovieDetails
          handleClose={showDetails}
          details={details}
        />}
    </Container>
  )
}

export default Movies;
