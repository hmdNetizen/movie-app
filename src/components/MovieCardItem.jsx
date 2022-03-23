import React from "react";
import styled from "./MovieCardItem.module.css";
import PropTypes from "prop-types";

const makeshiftPoster =
  "https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8bW92aWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=185&h=231&q=60";

const MovieCardItem = ({ movie: { Poster, Title } }) => {
  return (
    <div className={styled.card}>
      <img
        src={Poster === "N/A" ? makeshiftPoster : Poster}
        alt={`${Title}'s poster`}
      />
      <h5>{Title}</h5>
    </div>
  );
};

MovieCardItem.propTypes = {
  movie: PropTypes.object.isRequired,
};
export default MovieCardItem;
