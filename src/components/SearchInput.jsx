import React, { useCallback } from "react";
import styled from "./Search.module.css";
import axios from "axios";
import debounce from "lodash.debounce";
import PropTypes from "prop-types";

const SearchInput = (props) => {
  const { setLoading, setMovies, setError, query, setQuery } = props;
  const fetchSearchedMovies = async (query) => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `http://www.omdbapi.com/?s=${query}&apikey=e8b32741`
      );

      if (data.Response === "True") {
        setMovies(data.Search);
        setError("");
      } else {
        setMovies([]);
        setError(data.Error);
      }
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  //   eslint-disable-next-line
  const debounceSearchMovies = useCallback(
    debounce(fetchSearchedMovies, 500),
    []
  );

  const handleChange = async (event) => {
    setQuery(event.target.value);
    debounceSearchMovies(event.target.value);
  };
  return (
    <section className={styled.search}>
      <label htmlFor="search">Search</label>
      <input id="search" onChange={handleChange} value={query} />
    </section>
  );
};

SearchInput.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
  setMovies: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
};

export default SearchInput;
