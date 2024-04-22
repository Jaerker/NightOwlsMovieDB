
import './search-bar.css';
import { useState } from 'react';
import agent from '../../api/agent';

const SearchBar = () => {
	const [input, setInput] = useState('');

	const fetchData = async (value) => {
		await agent.list.searchByTitle(value);
	};

	const handleSearch = (value) => {
		setInput(value);
		fetchData(value);

	}

	return (
		<section className='placeholder'>
			<form action={`/search/${input}`} >
				<input aria-label='Searchbar' placeholder='Search...' value={input} onChange={(e) => handleSearch(e.target.value)} className="search-bar" />
			</form>
		</section>
	);
}

export default SearchBar;



