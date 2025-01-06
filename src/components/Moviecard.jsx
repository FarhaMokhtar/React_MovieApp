import React from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { increaseCounter , addFavorite, removeFavorite} from "../store/slices/fav";

function MovieCard(props) {
    const favorites = useSelector((state) => state.movfav.favorites);
    const counterVal = useSelector((state) => state.movfav.value);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { movieItem } = props;

    const handleRedirectToDetails = (id) => {
        navigate(`/movie_details/${id}`);
    }
    // console.log(counterVal);
    
    const isFavorite = favorites.some(fav => fav.id === movieItem.id);

    const handleFavoriteClick = () => {
        if (isFavorite) {
            dispatch(removeFavorite(movieItem.id));
        } else {
            dispatch(addFavorite(movieItem));
        }
        // Update the counter
        dispatch(increaseCounter());
    }
    console.log(favorites);
    
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
                 <button onClick={handleFavoriteClick}>  
                 <i className={isFavorite ? "fa-solid fa-heart" : "fa-regular fa-heart"} style={{ color: isFavorite ? "red" : "black" }}></i>                    </button>
                </div>
            </div>
        </>
    )
}
export default MovieCard;