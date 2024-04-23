import CardContainer from '../../components/cardContainer/CardContainer';
import './favourites-page.css';
import { useState } from 'react';

import local from '../../api/local';

function FavouritesPage() {
	const [favourites, setFavourites] = useState(local.favourites.get());

 
	return (
	<>
		<h1>Favourites</h1>
		<CardContainer list={favourites} setList={setFavourites} />
	</>	
	);
}

export default FavouritesPage;