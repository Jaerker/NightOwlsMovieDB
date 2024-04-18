import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CardContainer from '../../components/cardContainer/CardContainer';
import agent from '../../api/agent';
import Card from '../../components/card/Card';

function RecommendPage() {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    // Använder location för att rendera om sidan varje gång det besöks 
    //(page reload eller tryck på Recommend knapp i navbar)
    const location = useLocation();
    // Key ändras varje gång sidan besöks, 
    // när key ändras - görs de ny api anrop med random sida nummer i useEffect
    const [key, setKey] = useState(location.key);

    const getTrending = async (page) => {
        const data = await agent.list.getTrending(page);
        setResults(data.results);
        setLoading(false);
    }

    // 
    useEffect(() => {
        const randomPage = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 10
        getTrending(randomPage);
    }, [key]);

    useEffect(() => {
        setKey(location.key);
    }, [location]);

    return (
        <>
            {loading ? (
                <p className="loading-message">Loading...</p>
            ) : results.length > 0 ? (
                <CardContainer list={results} />
            ) : (
                <p>No movies found</p>
            )}
        </>
    );
}

export default RecommendPage;