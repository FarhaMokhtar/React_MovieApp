import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
function MovieDetails() {
    const [Movie, setMovie] = useState();
    const params = useParams();
    console.log(params);
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=e6107025fd1eafc9a6fc4ac528dc040b`)
            .then((res) => setMovie(res.data)).catch((err) => console.log(err)
            )

    }, [params.id])
 console.log(Movie);
 

    return (
        <>
            <div className="container">
                <div className="d-flex">
                    <div className="p-2 flex-fill">
                        <img src={`https://image.tmdb.org/t/p/w500${Movie?.poster_path}`} className="card-img-top" alt="..." />
                    </div>
                    <div className="p-2 flex-fill">
                        <h1 className="card-title">{Movie?.title}</h1>
                        <p className="card-text">{Movie?.overview}</p>
                        <div>
                                {Movie?.genres.map((genre) => (
                                    <span
                                        key={genre.id}
                                        className="badge rounded-pill text-bg-warning mx-1"
                                    >
                                        {genre.name}
                                    </span>
                                ))}
                            </div>
                        <p className="card-text"><small className="text-body-secondary">{Movie?.release_date}</small></p>
                        <a href={Movie?.homepage}>Website</a>
                    </div>
                </div>
            </div>
        </>
    )

}
export default MovieDetails