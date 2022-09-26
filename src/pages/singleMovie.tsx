import { singleMovieAPi } from "apis/single-movie-api";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  year: number | string;
  duration: string;
  minutes: string;
  category: string;
  description: string;
  image: any;
}
const SingleMovie: React.FC = () => {
  const urlParams = useParams();
  const [movieDetails, setMovieDetails] = useState<Props>();
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    handleMovieDetails();
  }, []);

  const handleMovieDetails = () => {
    singleMovieAPi?.map((movie) => {
      if (movie.id == urlParams.movieId) {
        setMovieDetails(movie.movie);
      }
    });
    setLoading(false);
  };
  return (
    <div>
      {/* loading spinner in case data is not ready to be shown  */}
      {loading ? (
        <div className="loader"></div>
      ) : (
        <>
          {/* link to previous page  */}
          <Link to={`/movies`} className="btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              style={{ width: "20px" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
              />
            </svg>
            Back
          </Link>
          {/* single movie card */}
          <div className="movie-card">
            <div className="container">
              <h3>{movieDetails?.category}</h3>
            </div>
            <img
              src={movieDetails?.image}
              alt="Avatar"
              style={{ width: "100%" }}
            />
            <div className="container" style={{ backgroundColor: "white" }}>
              <h2>
                <b> {movieDetails?.name}</b>
              </h2>
              <p>{movieDetails?.description}</p>
            </div>
            <div className="container">
              <p>Duration : {movieDetails?.duration}</p>
              <span className="movie-card--details">
                {movieDetails?.minutes}
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleMovie;
