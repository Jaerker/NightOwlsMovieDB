import RoundButton from '../roundButton/RoundButton';
import './card.css';
import Star from '../../assets/star.svg';
import Plus from '../../assets/plus.svg';
import Minus from '../../assets/minus.svg';
import { Link } from 'react-router-dom';

function Card({ movie }) {

	const cardClass = { backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, .8) 100%), url(https://image.tmdb.org/t/p/w500${movie.poster_path})` };
	return (
		<Link to={`/movie/${movie.id}`} className='card' style={cardClass}>
			<section className='card__top-right-buttons'>
				<RoundButton className='round-button' content={<img className='plus' src={Plus} alt='Plus icon' />} onClick={() => { }} />
				<RoundButton className='round-button' content={<img src={Star} alt='Star icon' />} onClick={() => { }} />
			</section>
			<h3 className='movie-title'>{movie.title}</h3>
			<RoundButton className='round-button round-button--rating' content={<h3 className='rating'>{Math.round(movie.vote_average * 10) / 10}</h3>} onClick={() => { }} />
		</Link>
	);
}

export default Card;