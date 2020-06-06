import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({ title, year, summary, poster, genres }) {
    return (
        <div className="movies">
            <img src={poster} alt={title} title={title} />}
            <div className="movie_data">
                <h3 className="movie_title">{title}</h3>
                <ul className="genre">
                    {genres.map((genre, id) => (
                        <li key={id} className="genres">
                            {genre}
                        </li>
                    ))}
                </ul>
                <h5 className="movie_year">{year}</h5>
                <p className="movie_summary">{summary}</p>
            </div>
        </div>
    );
}
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
