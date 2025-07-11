import MovieCard from "../movieComponents/MovieCard";
import { useState } from "react";

function Home() {
    const [searchQuery, setSearchQuery]= useState("");
    const movies = [
        {id:1, title:'John Wick', release_date:'2020'},
                {id:2, title:'John Wick 2', release_date:'2023'},
        {id:3, title:'John Wick 3', release_date:'2026'}

    ]

    const handleSearch =()=>{
        alert(searchQuery);
    };

    return <div className="home" style={{display: 'none'}}>

        <form className="search-form"  onSubmit={handleSearch}>
            <input type="text" 
            placeholder="Search for movies"
             className="search-input" 
             value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>

            <button type="submit" className="search-button">Search</button>
        </form>
        <div className="movie-grid">
            {movies.map(
                (movie)=>
                movie.title.toLowerCase().startsWith(searchQuery) 
                &&(
                <MovieCard movie={movie} key={movie.id}/>))}
        </div>
    </div>
}

export default Home;