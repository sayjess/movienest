import React from "react";

const SearchMovies = () => {

    const searchMovies = async (e) => {
        e.preventDefault();

        const query = "The Simpsons"

        const url = `https://api.themoviedb.org/3/movie/550?api_key=c5f7422cdd758485fceab81926ac45ba&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data)
        }
        catch(e){
            console.error(e);
        }


    }

    return (
        <form className="form" onSubmit={searchMovies}>
            <label className="label" htmlFor="query">Movie Name</label>
            <input className="input" name="query" type='text' placeholder="search here..."/>
            <button className="button" type="submit">Search</button>
        </form>
    )
}

export default SearchMovies;