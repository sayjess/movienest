import React, {useState} from "react";
import CardList from "./CardList";

const SearchMovies = () => {
    
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();

        // const url = `https://api.themoviedb.org/3/movie/550?api_key=c5f7422cdd758485fceab81926ac45ba&language=en-US&query=${query}&page=1&include_adult=false`;
        const url = `https://api.themoviedb.org/3/search/movie?api_key=c5f7422cdd758485fceab81926ac45ba&query=${query}`

        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data.results)
            setMovies(data.results)
        }
        catch(e){
            console.error(e);
        }


    }

    return (
        <>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query">Movie Name</label>
                <input 
                className="input" 
                name="query" 
                type='text' 
                placeholder="search here..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}/>
                <button className="button" type="submit">Search</button>
            </form>  
            <CardList movies={movies}/>  
        </>
    )
}

export default SearchMovies;