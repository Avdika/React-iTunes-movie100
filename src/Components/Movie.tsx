import { Container, RepositoryBody, Title, Description, Image } from '../Styles/RepositoryStyle';

type Props = {
  onClick: () => void,
  image: string,
  title: string,
  genre: string,
  artist: string,
  releasedate: Date
}

function Movie(props: Props) {
  return (
    <Container onClick={props.onClick}>
      <Image src={props.image} />
      <RepositoryBody>
        <Title>{props.title}</Title>
        <Description>{props.genre}</Description>
        <Title>Artist</Title><Description>{props.artist}</Description>
        <Title>Releasedate</Title><Description>{props.releasedate}</Description>
      </RepositoryBody>
    </Container>
  )
}

export default Movie;
