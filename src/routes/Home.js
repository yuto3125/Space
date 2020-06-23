import React, { Component } from 'react';
import Axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends Component {
    state = {
        isLoading: true,
        movies: [],
    };
    getMovies = async () => {
        const {
            data: {
                data: { movies },
            },
        } = await Axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
        this.setState({ movies, isLoading: false }); //==movies: movies
    };
    componentDidMount() {
        this.getMovies();
    }
    render() {
        const { isLoading, movies } = this.state;
        return (
            <section className="container">
                {isLoading ? (
                    <div className="loader">
                        <span className="loader_text">Still Loading...</span>
                    </div>
                ) : (
                    <div className="Movies">
                        {movies.map((movie) => (
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                title={movie.title}
                                year={movie.year}
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                                genres={movie.genres}
                            />
                        ))}
                    </div>
                )}
            </section>
        );
    }
}

export default Home;
