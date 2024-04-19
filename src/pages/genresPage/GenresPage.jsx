import { useState, useEffect } from "react";
import GenreButtons from "../../components/genreButtons/GenreButtons";
import agent from "../../api/agent";
import CardContainer from "../../components/cardContainer/CardContainer";

function GenresPage() {
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [searchResult, setSearchResult] = useState([]);

    const search = async () => {
        const data = await agent.list.searchByGenre(selectedGenres);
        setSearchResult(data.results);
    };

    useEffect(() => {
            search();
    }, [selectedGenres]);

    return (
        <div>
            <GenreButtons selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} />
            <h1>Genres</h1>
            <CardContainer list={searchResult} setList={setSearchResult} />


        </div>

    );
}

export default GenresPage;