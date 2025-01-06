import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import MovieCard from "../components/Moviecard";
import LanguageContext from "../context/langContext";

function Movies() {
    const { lang } = useContext(LanguageContext);
    const [movies, setMovies] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true); // Show loading when fetching data
        axios
            .get(`${import.meta.env.VITE_API_BASE_URL}/discover/movie`, {
                params: {
                    api_key: import.meta.env.VITE_API_KEY,
                    language: lang,
                },
            })
            .then((res) => {
                setMovies(res.data.results);
                setLoading(false); // Hide loading after data is fetched
            })
            .catch((err) => {
                console.log(err);
                setLoading(false); // Hide loading even if there's an error
            });
    }, [lang]);

    return (
        <>
            <div className="container">
                {loading ? (
                    <p>{lang === "ar" ? "جارٍ التحميل..." : "Loading..."}</p>
                ) : (
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {movies?.map((movie) => (
                            <div className="col" key={movie.id}>
                                <MovieCard movieItem={movie} />
                            </div>
                        ))}
                    </div>
                )}
            </div>

        </>
    )
}
export default Movies;