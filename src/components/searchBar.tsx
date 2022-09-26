import React, { useEffect, useState } from "react";
import "./components.scss";
import { movies } from "apis/movies-list-api";

interface Props {
  setMoviesList: any;
}

const SearchBar: React.FC<Props> = (props) => {
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    handleChange(searchValue);
  }, [searchValue]);

  const handleChange = (searchValue: string) => {
    const moviesList = movies.filter(
      (value) =>
        value.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        value.category.toLowerCase().includes(searchValue.toLowerCase())
    );
    props.setMoviesList(moviesList);
  };
  return (
    <input
      type="text"
      className="search"
      onChange={(e) => setSearchValue(e.target.value)}
      value={searchValue}
      placeholder="Search by name/category..."
    />
  );
};
export default SearchBar;
