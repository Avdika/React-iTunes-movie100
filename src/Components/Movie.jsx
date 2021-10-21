import React from 'react';

import { Container, RepositoryBody, Title, Description, Image } from '../Styled/RepositoryStyle';

function Movie(props) {
  return (
    <Container>
      <a href={props.link}>
        <Image src={props.image} />
      </a>
      <RepositoryBody>
        <Title>{props.title}</Title>
        <Title>Genre</Title><Description>{props.genre}</Description>
        <Title>Artist</Title><Description>{props.artist}</Description>
        <Title>Releasedate</Title><Description>{props.releasedate}</Description>
      </RepositoryBody>
    </Container>
  )
}

export default Movie;
