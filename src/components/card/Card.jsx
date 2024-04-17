import './card.css';

function Card({movie}) {

	console.log(movie);
	return (
		<section className='card'>
			<h3>{movie.title}</h3>
			
		</section>
	);
}

export default Card;