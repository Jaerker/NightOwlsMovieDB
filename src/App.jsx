import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import HomePage from './pages/homePage/HomePage';
import SearchResultPage from './pages/searchResultPage/SearchResultPage';
import WatchlistPage from './pages/watchlistPage/WatchlistPage';
import SingleMoviePage from './pages/singleMoviePage/SingleMoviePage';
import FavouritesPage from './pages/favouritesPage/FavouritesPage';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';


function App() {

	return (
		<Router>
			<Header />
				<Navbar />
				<main className='main placeholder'>
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/search' element={<SearchResultPage />} />
						<Route path='/watchlist' element={<WatchlistPage />} />
						<Route path='/favourites' element={<FavouritesPage />} />
						<Route path='/movie/:id' element={<SingleMoviePage />} />
					</Routes>
				</main>

		</Router>
	)
}

export default App;
