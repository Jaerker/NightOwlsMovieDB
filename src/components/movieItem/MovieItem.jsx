import './movieItem.css';
import { Link } from 'react-router-dom';
import agent from '../../api/agent';
import local from '../../api/local';
import { useState, useEffect } from 'react';
import { isInFavourites, isInWatchlist } from '../../controller/controller';

function MovieItem({ id }) {
    const [movieDetails, setMovieDetails] = useState(null);
    const [trailerUrl, setTrailerUrl] = useState(null);
    const [loadingDetails, setLoadingDetails] = useState(true);
    const [loadingRecommendations, setLoadingRecommendations] = useState(true);
    const [favourited, setFavourited] = useState(true);
    const [watchlisted, setWatchlisted] = useState(true);
    const [suggest, setSuggest] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            if (id) {
                setTrailerUrl(null);
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
                        setFavourited(isInFavourites(details.id));
                        setWatchlisted(isInWatchlist(details.id));
                        setLoadingDetails(false);
                    }
                } catch (err) {
                    console.error(err);
                }
            }
        };

        const fetchRecommendations = async () => {
            if (id) {
                try {
                    const suggest = await agent.list.getRecommendations(id);
                    setSuggest(suggest);
                    setLoadingRecommendations(false);
                } catch (err) {
                    console.error(err);
                }
            }
        };
        fetchMovieDetails();
        fetchRecommendations();
    }, [id]);

    const handleButtonPress = (e) => {
        switch (e.target.id) {
            case 'favourites':
                favourited ? local.favourites.remove(movieDetails) : local.favourites.add(movieDetails);
                setFavourited(prevValue => !prevValue);
                break;
            case 'watchlist':
                watchlisted ? local.watchlist.remove(movieDetails) : local.watchlist.add(movieDetails);
                setWatchlisted(prevValue => !prevValue);
                break;

        }
    }

    if (loadingDetails || loadingRecommendations) {
        return <div className="loading-message">Loading...</div>;
    }
    
    if (!loadingDetails && !movieDetails) {
        return <div className="loading-message">Could not find the movie...</div>;
    }


    return (
        <div className="movie-container">
            <div 
                className="single-movie-item" 
                style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path})` }}
                aria-label={`Background image of the movie ${movieDetails.original_title}`}>
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
                        <button id="favourites" className={`movie-button ${favourited ? 'toggle-button--active' : 'toggle-button--inactive'}`} onClick={handleButtonPress}>{favourited ? 'Remove from Favourites' : 'Add to Favourites'}</button>
                        <button id="watchlist" className={`movie-button ${watchlisted ? 'toggle-button--active' : 'toggle-button--inactive'}`} onClick={handleButtonPress}>{watchlisted ? 'Remove from Watchlist' : 'Add to Watchlist'}</button>
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
            <p className="may-like">You may also like</p>
            <div className="suggestions">
                {suggest && suggest.results.slice(0, 4).map(movie => (
                    <Link to={`/movie/${movie.id}`} key={movie.id}>
                        <div 
                            className="suggested-movie" 
                            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})` }}
                            aria-label={`Background image of the suggested movie ${movie.original_title}`}>
                            <div className="suggested-poster" >
                                {movie.poster_path ? (
                                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                        alt={`${movie.original_title} movie poster`}
                                        className="suggested-poster" />
                                ) : (
                                    <p className="no-movie-msg">No poster was found</p>
                                )}
                            </div>
                            <div className="suggested-info">
                                <h1 className="suggested-name">{movie.original_title}</h1>
                                {movie.tagline && <h2>{movie.tagline}</h2>}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default MovieItem