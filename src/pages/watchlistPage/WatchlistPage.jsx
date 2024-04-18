import CardContainer from '../../components/cardContainer/CardContainer';
import './watchlist-page.css';
import { useEffect, useState } from 'react';

import local from '../../api/local';

function WatchlistPage() {
	const [watchlistItems, setWatchlistItems] = useState([]);

	useEffect(()=> {
		setWatchlistItems(local.watchlist.get());
	}, [watchlistItems]);
 
	return (
	<>
		<h1>Watchlist</h1>
		<CardContainer list={watchlistItems} />
	</>	
	);
}

export default WatchlistPage;