import { useEffect } from 'react';
import local from '../../api/local';
import Card from '../../components/card/Card';
import CardContainer from '../../components/cardContainer/CardContainer';
import './favourites-page.css';
import agent from '../../api/agent';
function FavouritesPage() {
	
	
	useEffect(() => {
		getData();

	}, []);
	
	const getData = async () => {
		const data = await agent.list.getPopular().then(res => res.results);
		console.log(data);
		data.results.foreach(movie => local.favourites.add(movie));
	}

	return (
	<>
		<h1>Favourites</h1>
		<CardContainer>
		{local.favourites.get().map((movie, index) => (
			<Card key={index} movie={movie} />	
		))}		
		</CardContainer>
		
	</>	
	);
}

export default FavouritesPage;