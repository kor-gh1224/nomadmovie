import React from "react";
import axios from "axios";
import Movie from "./movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");
    console.log(movies);
    this.setState({ movies, isLoading: false });
  };
  async componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <setcion class="container">
        {isLoading ? (
          <div class="loader">
            <span class="loader__text">Loading..!</span>
          </div>
        ) : (
          <div class="movies">
            {movies.map((movie) => (
              <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} genres={movie.genres} />
            ))}
          </div>
        )}
      </setcion>
    );
  }
}

export default App;
