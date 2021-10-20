import React from 'react';

import Movie from './Movie';
import { Container } from '../Styled/RepositoriesStyle';

function Movies(props) {
  return (
    <Container>
      {props.items.map(item => (
        <Movie
          key={item.id}
          link={item.html_url}
          title={item.name}
          description={item.description}
          image={item.owner.avatar_url}
        />
      ))}
    </Container>
  )
}

export default Movies;
