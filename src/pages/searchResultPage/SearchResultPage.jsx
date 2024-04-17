import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import agent from '../../api/agent';
import CardContainer from '../../components/cardContainer/CardContainer';
import Card from '../../components/card/Card';

function SearchResultPage() {
	const { searchValue } = useParams();
	const [results, setResults] = useState([]);

	const getData = async () => {
		const data = await agent.list.searchByTitle(searchValue);
		setResults(data.results);
	}

	useEffect(() => {
		getData();
	}, []);

	return (
		<>
			<CardContainer>
				{searchValue.length > 0 && results.map((result, index) => (
					<Card key={index} movie={result} />
				))}
			</CardContainer>
		</>
	)
}

export default SearchResultPage;

