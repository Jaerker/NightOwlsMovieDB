import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CardContainer from '../../components/cardContainer/CardContainer';
import agent from '../../api/agent';

function RecommendPage() {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
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
            <h1>Recommended movies</h1>
            {loading ? (
                <p className='loading-message'>Loading...</p>
            ) : results.length > 0 ? (
                <CardContainer list={results} />
            ) : (
                <p>No movies found</p>
            )}
        </>
    );
}

export default RecommendPage;