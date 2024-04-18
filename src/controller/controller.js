import local from '../api/local';

export const isInFavourites = (movieId) => {
    const favourites = local.favourites.getIds();
    return favourites.some(movie => movie === movieId);
}

export const isInWatchlist = (movieId) => {
    const watchlist = local.watchlist.getIds();
    return watchlist.some(movie => movie === movieId);
}
