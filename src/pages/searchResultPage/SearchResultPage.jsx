import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import agent from '../../api/agent';
import CardContainer from '../../components/cardContainer/CardContainer';



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
			<CardContainer list={results}/>
		</>
	);
}

export default SearchResultPage;

