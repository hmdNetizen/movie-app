import React from "react";
import MovieCardItem from "./MovieCardItem";
import styled from "./MovieCard.module.css";
import Skeleton from "@mui/material/Skeleton";

const MovieCard = ({ movies, loading }) => {
  return loading ? (
    <div className={styled.skeletonWrapper}>
      {new Array(10).fill().map((arr, index) => (
        <Skeleton rectangle height="25rem" width="25rem" />
      ))}
    </div>
  ) : (
    <div className={styled.movies}>
      {!loading &&
        movies.length > 0 &&
        movies.map((movie) => (
          <MovieCardItem movie={movie} key={movie.imdbID} />
        ))}
    </div>
  );
};

export default MovieCard;
