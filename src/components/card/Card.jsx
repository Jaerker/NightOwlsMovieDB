
import RoundButton from '../roundButton/RoundButton';

import Star from '../../assets/star.svg';
import Plus from '../../assets/plus.svg';
import Minus from '../../assets/minus.svg';
import './card.css';
import { isInFavourites, isInWatchlist } from '../../controller/controller';
import { useState } from 'react';

function Card({ movie, handlePress }) {

	const [favourited, setFavourited] = useState(isInFavourites(movie.id));
	const [watchlisted, setWatchlisted] = useState(isInWatchlist(movie.id));

	const cardClass = { backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, .8) 100%), url(https://image.tmdb.org/t/p/w500${movie.poster_path})` };
	return (
		<article onClick={(e) => handlePress(e, movie, setFavourited, setWatchlisted)} className='card' style={cardClass}>
			<section className='card__top-right-buttons'>
				<RoundButton className='round-button round-button--watchlist' content={
				<>
					<img className={`round-button__plus-icon ${watchlisted ? 'round-button__plus-icon--disabled' : 'round-button__plus-icon--enabled'}`} src={Plus} alt='Plus icon' />
					<img className='round-button__minus-icon' src={Minus} alt='Minus icon' />
				</>} />
				<RoundButton className='round-button round-button--favourites' content={<img className={`round-button__favourites ${favourited ? 'round-button__favourites--true' : 'round-button__favourites--false'}`} src={Star} alt='Star icon' />} onClick={() => { }} />
			</section>
			<h3 className='movie-title'>{movie.title}</h3>
			<RoundButton className='round-button round-button--rating' content={<h3 className='rating'>{Math.round(movie.vote_average * 10) / 10}</h3>}/>
		</article>
	);
}

export default Card;