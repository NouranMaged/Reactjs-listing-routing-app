import React, { useState } from "react";
import SearchBar from "components/searchBar";
import { Link } from "react-router-dom";

interface Props {
  id: string;
  name: string;
  category: string;
  image: any;
}
const AllMovies: React.FC = () => {
  const [moviesList, setMoviesList] = useState<Props[]>([]);

  return (
    <>
      <div>
        <SearchBar setMoviesList={setMoviesList} />
      </div>
      <div className="cards mt-10">
        {moviesList?.length > 0 ? (
          moviesList?.map((movie, index) => (
            <Link to={`./${movie.id}`} key={index}>
              <div className="card">
                <img
                  className="block h-8 w-auto lg:hidden"
                  src={movie.image}
                  alt="Your Company"
                />
                <div>
                  <h4>
                    <b>{movie.name}</b>
                  </h4>
                  <p>{movie.category}</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          //in case nothing matches the searched word
          <h1>No Movies Maching this Name or Category</h1>
        )}
      </div>
    </>
  );
};
export default AllMovies;
