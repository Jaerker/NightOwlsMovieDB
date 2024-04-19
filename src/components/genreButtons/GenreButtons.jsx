import { useEffect, useState } from 'react';
import agent from '../../api/agent';

import './GenreButtons.css';
import GenreButton from '../genreButton/GenreButton';


const GenreButtons = ({ selectedGenres, setSelectedGenres }) => {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        setupGenres();
    }, []);

    const setupGenres = async () => {
        const data = await agent.list.getGenres()
        setGenres(data);
    }
    const handleGenreButton = (e, setIsActive) => {
        if (selectedGenres.includes(e.target.id)) {
            setSelectedGenres(selectedGenres.filter(genre => genre !== e.target.id));
        } else {
            setSelectedGenres([...selectedGenres, e.target.id]);
        }
        setIsActive(prevValue => !prevValue);
        console.log(selectedGenres);

    }


    return (
        <div className='button__container'>
            
            {genres.map((genre, index) => (
                <GenreButton key={index} id={genre.id} name={genre.name} onClick={handleGenreButton} />
            ))}
        </div>
    );
};

export default GenreButtons;

