import React, { useState, useContext } from 'react';

import Movie from './Movie';
import MovieDetails from './MovieDetails';
import { ActualData, Datatype } from '../Context/actualDataContext';
import '../Styles/css/movies.css';

type Props = {
  items: Datatype[]
}

function Movies(props: Props) {
  let { items }  = props;
  const [isDetails, setIsDeteils] = useState(false);
  const [details, setDetails] = useState<Datatype>({} as Datatype);
  const { filter } = useContext(ActualData);

  function showDetails(item: Datatype = {} as Datatype) {
    setIsDeteils(!isDetails);
    setDetails(item);
  }

  if (items && filter) {
    items = items.filter(item => item['im:name'].label.toUpperCase().includes(filter.toUpperCase()));
  }

  return (
    <div className='moviesBlock'>
      {items?.map(item => (
        <Movie
          key={Date.now() + items.indexOf(item)}
          title={item['im:name']?.label}
          genre={item.category.attributes?.label}
          artist={item['im:artist']?.label}
          releasedate={item['im:releaseDate'].attributes?.label}
          image={item['im:image'][0]?.label.replace(/(?<!\d)\d{2,2}x\d{2,2}(?!\d)/g, '300x300')}
          onClick={() => showDetails(item)}
        />
      ))}
      {isDetails &&
        <MovieDetails
          handleClose={showDetails}
          details={details}
        />}
    </div>
  )
}

export default Movies;
