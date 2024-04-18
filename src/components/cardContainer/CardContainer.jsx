import './card-container.css';
import local from '../../api/local';
import Card from '../card/Card';
import { useNavigate } from 'react-router-dom';
import { isInFavourites, isInWatchlist } from '../../controller/controller';

function CardContainer({ list }) {
	const navigate = useNavigate();



	const handleButtonPress = async (e, movie, setFavourited, setWatchlisted) => {

		switch(e.target.className){
			case 'round-button round-button--favourites':
				setFavourited(prevValue => !prevValue);
				isInFavourites(movie.id) ? local.favourites.remove(movie) : local.favourites.add(movie); 

				break;
			case 'round-button round-button--watchlist':
				isInWatchlist(movie.id) ? local.watchlist.remove(movie) : local.watchlist.add(movie);
				setWatchlisted(prevValue => !prevValue);
				break;
			default:
				navigate(`/movie/${movie.id}`);
				break;
		}
	}

	return (
		<article className='card-container'>
			{list.length > 0 ? list.map((movie) => {
				return (
					<Card key={movie.id} movie={movie} handlePress={handleButtonPress} />
				);
			}) : <h1>No movies found</h1>}
		</article>
	);
}

export default CardContainer;