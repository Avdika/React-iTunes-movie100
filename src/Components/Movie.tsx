import '../Styles/css/movie.css';

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
    <div className='movieCard' onClick={props.onClick}>
      <img className='movieImg' src={props.image} alt='movieImage'/>
      <div className='movieMainDetails'>
        <p><span>{props.title}</span></p>
        <p>{props.genre}</p>
        <p><span>Artist: </span>{props.artist}</p>
        <p><span>Releasedate: </span>{props.releasedate}</p>
      </div>
    </div>
  )
}

export default Movie;
