import CardContainer from '../../components/cardContainer/CardContainer';
import './watchlist-page.css';
import { useState } from 'react';

import local from '../../api/local';

function WatchlistPage() {
	const [watchlistItems, setWatchlistItems] = useState(local.watchlist.get());
 
	return (
	<>
		<h1>Watchlist</h1>
		<CardContainer list={watchlistItems} setList={setWatchlistItems} />
	</>	
	);
}

export default WatchlistPage;