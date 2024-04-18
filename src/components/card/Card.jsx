import { useNavigate } from 'react-router-dom';
import { isInFavourites, isInWatchlist } from '../../controller/controller';
import local from '../../api/local';

import RoundButton from '../roundButton/RoundButton';

import Star from '../../assets/star.svg';
import Plus from '../../assets/plus.svg';
import Minus from '../../assets/minus.svg';
import './card.css';


function Card({ movie }) {

	const navigate = useNavigate();

	const cardClicked = (e) => {

		switch(e.target.className){
			case 'round-button round-button--favourites':
				isInFavourites(movie.id) ? local.favourites.remove(movie).then(res => console.log(res)) : local.favourites.add(movie).then(res => console.log(res));
				break;
			case 'round-button round-button--watchlist':
				isInWatchlist(movie.id) ? local.watchlist.remove(movie) : local.watchlist.add(movie);
				break;
			default:
				navigate(`/movie/${movie.id}`);
				break;
		
		}

	}

	const cardClass = { backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, .8) 100%), url(https://image.tmdb.org/t/p/w500${movie.poster_path})` };
	return (
		<article onClick={(e) => cardClicked(e)} className='card' style={cardClass}>
			<section className='card__top-right-buttons'>
				<RoundButton className='round-button round-button--watchlist' content={
				<>
					<img className={`round-button__plus-icon ${isInWatchlist(movie.id) ? 'round-button__plus-icon--disabled' : 'round-button__plus-icon--enabled'}`} src={Plus} alt='Plus icon' />
					<img className='round-button__minus-icon' src={Minus} alt='Minus icon' />
				</>} onClick={() => { }} />
				<RoundButton className='round-button round-button--favourites' content={<img className={`round-button__favourites ${isInFavourites(movie.id) ? 'round-button__favourites--true' : 'round-button__favourites--false'}`} src={Star} alt='Star icon' />} onClick={() => { }} />
			</section>
			<h3 className='movie-title'>{movie.title}</h3>
			<RoundButton className='round-button round-button--rating' content={<h3 className='rating'>{Math.round(movie.vote_average * 10) / 10}</h3>} onClick={() => { }} />
		</article>
	);
}

export default Card;