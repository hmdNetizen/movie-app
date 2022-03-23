import React, { useState } from "react";
import Hero from "./Hero";
import SearchInput from "./SearchInput";
import MovieCard from "./MovieCard";
import styled from "./Home.module.css";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");

  return (
    <main className={styled.home}>
      <Hero />
      <section className={styled.contentSection}>
        <SearchInput
          setLoading={setLoading}
          setMovies={setMovies}
          setError={setError}
          query={query}
          setQuery={setQuery}
        />
        {query && !loading && movies.length === 0 && error ? (
          <h3>{error}</h3>
        ) : (
          <MovieCard movies={movies} loading={loading} />
        )}
      </section>
    </main>
  );
};

export default Home;
