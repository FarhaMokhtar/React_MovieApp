import React, { useEffect, useState } from "react";

import axios from "axios";
import MovieCard from "../components/Moviecard";

function Movies() {
    const [movies, setMovies] = useState();
    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/discover/movie?api_key=e6107025fd1eafc9a6fc4ac528dc040b")
            .then((res) => setMovies(res.data.results))
            .catch((err) => console.log(err));

    }, [])
    console.log(movies);

    return (
        <>
        <div className="container">
            <div className=" row row-cols-1 row-cols-md-3 g-4">
                {movies?.map((movie) => (
                    <div className="col" key={movie.id}>
                        <MovieCard movieItem={movie}/>
                    </div>

                ))}

            </div>
            </div>

        </>
    )
}
export default Movies;