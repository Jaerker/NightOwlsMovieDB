import { useState, useEffect } from 'react';
import agent from '../../api/agent';
import './GenreButtons.css';


const GenreButtons = ({ onSelectGenre }) => {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const genresList = await agent.list.getGenres();
                setGenres(genresList);
            } catch (error) {
                console.error('Error fetching genres:', error);
            }
        };

        fetchGenres();
    }, []);

    return (
        <div className='button__container'>
            {genres.map(genre => (
                <button className='genre__buttons'
                    key={genre.id}
                    onClick={() => onSelectGenre(genre.id)}
                >
                    {genre.name}
                </button>
            ))}
        </div>
    );
};

export default GenreButtons;