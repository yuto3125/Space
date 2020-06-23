import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Movie.css';

function Movie({ id, title, year, summary, poster, genres }) {
    return (
        <div className="movies">
            <Link
                to={{
                    pathname: `/movie/${id}`,
                    state: {
                        title,
                        year,
                        summary,
                        poster,
                        genres,
                    },
                }}
            >
                <img src={poster} alt={title} title={title} />
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
                    <p className="movie_summary">{summary.slice(0, 400)}...</p>
                </div>
            </Link>
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
