import { Datatype } from '../Context/actualDataContext';
import '../Styles/css/movieDetails.css';

type Props = {
  details: Datatype,
  handleClose: () => void
}

const MovieDetails = (props: Props) => {
  const { details } = props;

  return details ? (
    <div className='details-box'>
      <div className='box'>
        <span className='close-icon' onClick={props.handleClose}>x</span>
        <div className='imageDetails'>
          <img src={details['im:image'][0]?.label.replace(/(?<!\d)\d{2,2}x\d{2,2}(?!\d)/g, '300x300')}
            alt={details['im:name']?.label} />
          <p><a
            target="_blank"
            rel="noopener noreferrer"
            download={details['im:name']?.label}
            type={details.link[0]?.attributes.type}
            href={details['im:image'][0]?.label.replace(/(?<!\d)\d{2,2}x\d{2,2}(?!\d)/g, '2000x3000')}
          >
            Download poster!</a></p>
        </div>
        <div className='characteristicBox'>
          <p><span>Title: </span>{details['im:name']?.label}</p>
          <p><span>Genre: </span>{details.category.attributes?.label}</p>
          <p><span>Artist: </span>{details["im:artist"]?.label}</p>
          <p><span>Releasedate: </span>{details['im:releaseDate'].attributes?.label}</p>
          <p><span>Description: </span>{details.summary?.label}</p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            type={details.link[0]?.attributes.type}
            href={details.link[0]?.attributes.href}
          >View more on apple.com</a>
          <p>Rent {details['im:rentalPrice']?.label} / Buy {details['im:price']?.label}</p>
          <p>Rights: {details.rights?.label}</p>
        </div>
      </div>
    </div>
  ) : null;
};

export default MovieDetails;
