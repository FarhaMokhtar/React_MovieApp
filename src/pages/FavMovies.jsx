import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFavorite } from "../store/slices/fav";

function FavMovies() {
    const favorites = useSelector((state) => state.movfav.favorites);  // Get favorite movies from Redux
    const dispatch = useDispatch();
    const handleRemoveFavorite = (movieId) => {
        dispatch(removeFavorite(movieId)); 
      };
    return(
        <>
         <div className="favorites-page">
      <h1>Favorites</h1>
      {favorites.length === 0 ? (
        <p>No favorite movies added yet.</p>
      ) : (
        <div className="favorites-list">
          {favorites.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="movie-poster"
              />
              <div className="movie-details">
                <h5>{movie.title}</h5>
                <button
                  className="btn btn-danger"
                  onClick={() => handleRemoveFavorite(movie.id)}
                >
                  Remove from Favorites
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>

        </>
    )
}
export default FavMovies