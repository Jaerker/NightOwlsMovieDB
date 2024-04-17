import './movieItem.css';
import agent from '../../api/agent';
import { useState, useEffect } from 'react';

function MovieItem({ id }) {
    const [movieDetails, setMovieDetails] = useState(null);
    const [trailerUrl, setTrailerUrl] = useState(null);
    const [loading, setLoading] = useState(true); // Add this line

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
                    // Lägger till setTimeout för att slippa ha 
                    // "Could not find the movie" medans sida laddas
                    setTimeout(() => setLoading(false), 50);
                } catch (err) {
                    console.error(err);
                }
            }
        };

        fetchMovieDetails();
    }, [id]);

    // setTimeout hjälper inte varje gång, därför har vi "Loading",
    // annars visar det "Could not find movie" när sidan laddas om
    if (loading) {
        return <div>Loading...</div>;
    }

    if (!movieDetails) {
        return <div>Could not find the movie...</div>;
    }

    return (
        <div className="movie-container">
            <div className="single-movie-item" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path})` }}>
            <div className="movie-poster" >
                    {/* Kollar om det finns poster,
                    renderar "No poster was found" text ifall det saknas */}
                    {movieDetails.poster_path ? (
                        <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} 
                            alt={`${movieDetails.original_title} movie poster`} 
                            className="movie-poster" />
                    ) : (
                        <p className="no-movie-msg">No poster was found</p>
                    )}
                </div>
                <div className="movie-info">
                    <h1>{movieDetails.original_title}</h1>
                    {/* Visar tagline bara om det finns */}
                    {movieDetails.tagline && <h2>{movieDetails.tagline}</h2>}
                    <p>Runtime: {movieDetails.runtime} minutes</p>
                    <p>Rating: {movieDetails.vote_average}</p>
                    <p>Genre: {movieDetails.genres 
                                && movieDetails.genres.map((genre) => genre.name).join(', ')}</p>
                    {/* Visar homepage länk bara om det finns */}
                    {movieDetails.homepage && <a href={movieDetails.homepage} 
                                                className="movie-info-link">Visit Homepage</a>}
                    <p>{movieDetails.overview}</p>
                    <div className="single-movie-buttons">
                        <button className="movie-button">Add to Favourites</button>
                        <button className="movie-button">Add to Watchlist</button>
                    </div>
                </div>
            </div>
            {/* Visar trailer div bara om trailer finns */}
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
        </div>
    )
}

export default MovieItem