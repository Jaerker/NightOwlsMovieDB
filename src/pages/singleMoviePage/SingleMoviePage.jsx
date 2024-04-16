import { useParams } from 'react-router-dom';
import MovieItem from '../../components/movieItem/MovieItem';

function SingleMoviePage() {
	const { id } = useParams();

    return (
        <div>
            <MovieItem id={id} />
        </div>
    );
}

export default SingleMoviePage;