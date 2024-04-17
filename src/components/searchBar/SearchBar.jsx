
import './search-bar.css';
import { useState } from 'react';
import agent from '../../api/agent';



const SearchBar = () => {
	const [input, setInput] = useState('');



	const fetchData = (value) => {
		agent.list.searchByTitle(value)
			.then((data) => {
				console.log(data);

			})
			.catch((error) => {
				console.error('Error fetching data:', error);
			});
	};



	const handleSearch = (value) => {
		setInput(value);
		fetchData(value);

	}

	return (
		<section className='placeholder'>
			<input placeholder='Search...' value={input} onChange={(e) => handleSearch(e.target.value)} className="search-bar" />
		</section>
	);
}

export default SearchBar;



