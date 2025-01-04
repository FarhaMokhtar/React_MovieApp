import React from "react";
import { useNavigate } from "react-router";

function MovieCard(props) {
    const navigate = useNavigate();
    const { movieItem } = props;

    const handleRedirectToDetails = (id) => {
        navigate(`/movie_details/${id}`);
    }

    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <img src={`https://image.tmdb.org/t/p/w500${movieItem.poster_path}`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{movieItem.title}</h5>
                    <button
                        className="btn btn-primary"
                        onClick={() => handleRedirectToDetails(movieItem.id)}
                    >
                        View
                    </button>
                </div>
            </div>
        </>
    )
}
export default MovieCard;