import React, { useState, useContext } from 'react';

import Movie from './Movie';
import MovieDetails from './MovieDetails';
import { Container } from '../Styles/RepositoriesStyle';
import { ActualData } from '../Context/actualDataContext';

function Movies(props) {
  const [isDetails, setIsDeteils] = useState(false);
  const [details, setDetails] = useState([]);
  const { filter } = useContext(ActualData);

  const showDetails = (item) => {
    console.log('tututu');
    console.log('__item', item.target);
    setIsDeteils(!isDetails);
    setDetails(item);
  }
  console.log('__filter', filter);
  let { items } = props;
  if(items && filter) {
    items = items.filter(item => item['im:name'].label.toUpperCase().includes(filter.toUpperCase()));
  }

  return (
    <Container>
      {items?.map(item => (
        <Movie
          key={Date.now() + items.indexOf(item)}
          artist={item["im:artist"].label}
          // description={item.summary.label}
          genre={item.category.attributes.label}
          image={item['im:image'][0].label.replace(/(?<!\d)\d{2,2}x\d{2,2}(?!\d)/g, '300x300')}
          link={item.id.label}
          price={item["im:price"].label}
          releasedate={item["im:releaseDate"].attributes.label}
          title={item['im:name'].label}
          onClick={ event => { showDetails(event) } }
        />
      ))}
      {isDetails &&
        <MovieDetails
          handleClose={showDetails}
          detailInfo={details}
          content={<>
            <b>Design your Popup</b>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button>Test button</button>
          </>}
        />}
    </Container>
  )
}

export default Movies;
