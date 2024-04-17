import { useEffect, useState } from "react";
import agent from "../../api/agent";

import Card from "../../components/card/Card";
import CardContainer from "../../components/cardContainer/CardContainer";
import './home-page.css';
function HomePage() {

	const [data, setData] = useState([]);

	const getData = async () => {
		const agentData = await agent.list.getPopular();
		if(agentData !== null){
			setData(agentData.results);
		}
	}
	useEffect(() => {
		getData();
	}, []);

	return (
		<>
				<CardContainer>
					{data.length === 0 && <p className='loading-message'>Loading...</p>}
					
					{data.map((movie, index) => (
						
						<Card key={index} movie={movie} />
					))}
				</CardContainer>
		</>
	);
}

export default HomePage;


