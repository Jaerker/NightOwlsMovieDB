import agent from "./agent";

const requests = {
    get: (key) => { // Hämtar data från localstorage
        const returnValue = localStorage.getItem(key);
        return returnValue === null ? [] : JSON.parse(returnValue); // Om det inte finns någon data i localstorage så returnerar vi ett tomt objekt, värdet kan alltså aldrig vara null 
    },
    getIds: (key) => { // Hämtar id:n från filmerna som användaren har lagt till
        const returnValue = localStorage.getItem(key);
        if(returnValue === null){ // Om det inte finns någon data i localstorage så returnerar vi ett tomt objekt
            return [];
        }
        else{
            const data = JSON.parse(returnValue); // Om det finns data i localstorage så parsar vi datan
            return data.map(movie => movie.id); // Returnerar id:n från filmerna som användaren har lagt till 
        }
    },
    set: (key, value) => { // Sparar data i localstorage
        let data = requests.get(key);
        if(data.find(movie => movie.id === value.id)){ // Om det redan finns en film med det id som skickas in så returnerar vi false
            return false;
        }
        
        if (compareKeys(value, 'isList')) { // Kollar om nycklarna i objektet matchar nycklarna i listMovieObject. I så fall hämtar vi hem en detaljerad version av film objektet och sparar. 
            agent.movie.getDetails(value.id).then(response => { // Hämtar detaljerad information om filmen
                data.push(response);
                localStorage.setItem(key, JSON.stringify(data)); // Sparar arrayen i localstorage
            });
        }
        else{
            data.push(value);
            localStorage.setItem(key, JSON.stringify(data)); // Sparar arrayen i localstorage
            
        }

        return true;
    },
    delete: (key, value) => { // Tar bort data från localstorage
        console.log(value);
        const data = requests.get(key);
        if(data.find(movie => movie.id === value.id)){ // Om det inte finns någon film med det id som skickas in så returnerar vi false
            const newData = data.filter(movie => movie.id !== value.id); // Filtrerar bort objektet med det id som skickas in

            localStorage.setItem(key, JSON.stringify(newData)); // Sparar arrayen i localstorage
            return true; // Returnerar true om objektet har tagits bort    
        }
        return false;
    }
}

/**
 * @description Jämför nycklarna i ett objekt med nycklarna i ett annat objekt
 * @param {Object} a - Objektet som ska jämföras
 * @param {String} comparison - Vilket objekt som ska jämföras, antingen 'isList' eller 'isDetailed' Skickas inget värde in så jämförs objektet med listMovieObject
 * @returns True om nycklarna i objekten matchar, annars false
 * 
 */
function compareKeys(a, comparison = "isList") {
    const listMovieObject = {
        adult : false,
        backdrop_path : "/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
        genre_ids : "data",
        id : 693134,
        original_language : "en",
        original_title : "Dune: Part Two",
        overview : "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.",
        popularity : 3437.313,
        poster_path : "/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
        release_date : "2024-02-27",
        title : "Dune: Part Two",
        video: false,
        vote_average: 8.308,
        vote_count: 2900 
    }
    
    const detailedMovieObject = {
        adult : false,
        backdrop_path : "/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
        belongs_to_collection : {id: 726871, name: 'Dune Collection', poster_path: '/wcVafar6Efk3YgFvh8oZQ4yHL6H.jpg', backdrop_path: '/ygVSGv86R0BTOKJIb8RQ1sFxs4q.jpg'},
        budget : 190000000,
        genres : [{id: 12, name: 'Adventure'}, {id: 878, name: 'Science Fiction'}],
        homepage : "https://www.dunemovie.com",
        id : 693134,
        imdb_id : "tt15239678",
        origin_country : ['US'],
        original_language : "en",
        original_title : "Dune: Part Two",
        overview : "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.",
        popularity : 3437.313,
        poster_path : "/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
        production_companies : [{id: 9993, logo_path: '/2Tc1P3Ac8M479naPp1kYT3izLS5.png', name: 'Legendary Entertainment', origin_country: 'US'}, {id: 9996, logo_path: '/3tvBqYsBhxWeHlu62SIJ1el93O7.png', name: 'Warner Bros. Pictures', origin_country: 'US'}],
        production_countries : [{iso_3166_1: 'US', name: 'United States of America'}],
        release_date : "2024-02-27",
        revenue: 683813734,
        runtime : 167,
        spoken_languages: [{english_name: 'English', iso_639_1: 'en', name: 'English'}],
        status : "Released",
        tagline : "Long live the fighters.",
        title : "Dune: Part Two",
        video : false,
        vote_average : 8.304,
        vote_count : 2909,
    }
    const aKeys = Object.keys(a).sort(); // Sorterar nycklarna i objekten
    const detailedMovieObjectKeys = Object.keys(detailedMovieObject).sort();
    const listMovieObjectKeys = Object.keys(listMovieObject).sort(); 
    
    return comparison === 'isList' ? JSON.stringify(aKeys) === JSON.stringify(listMovieObjectKeys) : JSON.stringify(aKeys) === JSON.stringify(detailedMovieObjectKeys); // Jämför de sorterade nycklarna
}

const favourites = {
    get: () => requests.get('favourites'), // Hämtar data från localstorage
    getIds: () => requests.getIds('favourites'), // Hämtar id:n från filmerna som användaren har lagt till som favoriter
    add: (value) => requests.set('favourites', value), // Sparar data i localstorage
    remove: (value) => requests.delete('favourites', value) // Tar bort data från localstorage
}

const watchlist = {
    get: () => requests.get('watchlist'), // Hämtar data från localstorage
    getIds: () => requests.getIds('watchlist'), // Hämtar id:n från filmerna som användaren har lagt till i watchlist
    add: (value) => requests.set('watchlist', value), // Sparar data i localstorage
    remove: (value) => requests.delete('watchlist', value) // Tar bort data från localstorage

}


const local = {
    /**
     * @example 
     * const data = local.favourites.get(); // Hämtar data från localstorage
     * const data = local.favourites.getIds(); // Hämtar id:n från filmerna som användaren har lagt till som favoriter
     * const response = local.favourites.add(value); // Sparar data i localstorage, value är hela film objektet
     * const response = local.favourites.delete(value); // Tar bort data från localstorage, value är hela film objektet
     */
    favourites,
    /**
     * @example
     * const data = local.watchlist.get(); // Hämtar data från localstorage
     * const data = local.watchlist.getIds(); // Hämtar id:n från filmerna som användaren har lagt till i watchlist
     * const response = local.watchlist.add(value); // Sparar data i localstorage, value är hela film objektet
     * const response = local.watchlist.delete(value); // Tar bort data från localstorage, value är hela film objektet
     */
    watchlist
}

export default local;