import React from 'react';

import Movie from './Movie';
import { Container } from '../Styled/RepositoriesStyle';

function Movies(props) {
  return (
    <Container>
      {props.items.map(item => (
        <Movie
          key={item.id.attributes['im.id']}
          artist={item["im:artist"].label}
          description={item.summary.label}
          genre={item.category.attributes.label}
          image={item['im:image'][0].label.replace(/\d{2}x\d{2}/g, '300x300')}
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
