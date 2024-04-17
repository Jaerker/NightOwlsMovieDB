import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import agent from '../../api/agent';

function SearchResultPage() {
	const { searchValue } = useParams();
	console.log(searchValue);
	
	const getData = async () => {
		const data = await agent.list.searchByTitle(searchValue);
		console.log(data.results);
	}
	useEffect(() => {
		getData();
	},[]);

	return (
		<div>

		</div>
	)
}

export default SearchResultPage
