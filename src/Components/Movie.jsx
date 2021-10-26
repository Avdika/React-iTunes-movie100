import React from 'react';

import { Container, RepositoryBody, Title, Description, Image } from '../Styles/RepositoryStyle';

function Movie(props) {
  return (
    <Container onClick={props.onClick}>
      {/* <a href={props.link}> */}
      <Image src={props.image} />
      {/* </a> */}
      <RepositoryBody>
        <Title>{props.title}</Title>
        <Title>Genre</Title><Description>{props.genre}</Description>
        <Title>Artist</Title><Description>{props.artist}</Description>
        <Title>Releasedate</Title><Description>{props.releasedate}</Description>
        <input
          type="button"
          value="Click to Open Popup"
          onClick={props.onClick}
        />
      </RepositoryBody>
    </Container>
  )
}

export default Movie;
