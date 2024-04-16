import './movieItem.css';
import agent from '../../api/agent';
import { useState, useEffect } from 'react';

function MovieItem({ id }) {
    console.log(id)
    const [movieDetails, setMovieDetails] = useState(null);
    const [trailerUrl, setTrailerUrl] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            if (id) {
                try {
                    const details = await agent.movie.getDetails(id);
                    let trailer = await agent.movie.getTrailer(id);
                    if (details) {
                        setMovieDetails(details);
                        if (trailer) {
                            // Måste kovertera url till embed url för att kunna se trailer i vår SPA
                            // istället för att öppna ny tab med youtube
                            const videoId = new URL(trailer).searchParams.get('v');
                            trailer = `https://www.youtube.com/embed/${videoId}`;
                            setTrailerUrl(trailer);
                        }
                    }
                } catch (err) {
                    console.error(err);
                }
            }
        };

        fetchMovieDetails();
    }, [id]);

    if (!movieDetails) {
        return <div>Could not find the movie...</div>;
    }

    return (
        <div className="movie-container">
            {trailerUrl && (
                <div className="trailer">
                    <iframe
                        width="560"
                        height="315"
                        src={trailerUrl}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; 
                                autoplay; 
                                clipboard-write; 
                                encrypted-media; 
                                gyroscope; 
                                picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            )}
            <div className="single-movie-item" >
                <div className="movie-poster">
                    <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} 
                    alt={`${movieDetails.original_title} movie poster`} 
                    className="movie-poster" />
                </div>
                <div className="movie-info">
                    <h1>{movieDetails.original_title}</h1>
                    {movieDetails.tagline && <h2>{movieDetails.tagline}</h2>}
                    <p>Runtime: {movieDetails.runtime} minutes</p>
                    <p>Rating: {movieDetails.vote_average}</p>
                    <p>Genre: {movieDetails.genres 
                                && movieDetails.genres.map((genre) => genre.name).join(', ')}</p>
                    {movieDetails.homepage && <a href={movieDetails.homepage} 
                                                className="movie-info-link">Visit Homepage</a>}
                    <p>{movieDetails.overview}</p>
                    <div className="single-movie-buttons">
                        <button className="movie-button">Add to Favourites</button>
                        <button className="movie-button">Add to Watchlist</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieItem