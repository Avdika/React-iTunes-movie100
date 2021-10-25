import React from 'react';

import Movie from './Movie';
import { Container } from '../Styles/RepositoriesStyle';

function Movies(props) {
  return (
    <Container>
      {props.items?.map(item => (
        <Movie
          key={Date.now() + props.items.indexOf(item)}
          artist={item["im:artist"].label}
          description={item.summary.label}
          genre={item.category.attributes.label}
          image={item['im:image'][2].label}
          link={item.id.label}
          price={item["im:price"].label}
          releasedate={item["im:releaseDate"].attributes.label}
          title={item['im:name'].label}
        />
      ))}
    </Container>
  )
}

export default Movies;
