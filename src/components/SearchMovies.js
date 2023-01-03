import React, {useState} from "react";

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
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <div key={movie.id} className="card">
                        <img 
                            className="card--image" 
                            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                            alt={`${movie.title} poster`}
                        />
                        <div className="card--content">
                            <h3 className="card--title">{movie.title}</h3>
                            <p><small>RELEASE DATE: {movie.release_date}</small></p>
                            <p><small>RATING: {movie.vote_average}</small></p>
                            <p className="card--desc">{movie.overview}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default SearchMovies;