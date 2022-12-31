import React from "react";

const SearchMovies = () => {
    return (
        <form className="form">
            <label className="label" htmlFor="query">Movie Name</label>
            <input className="input" name="query" type='text' placeholder="search here..."/>
            <button className="button" type="submit">Search</button>
        </form>
    )
}

export default SearchMovies;