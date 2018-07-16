import React, { Component } from "react";

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
        willwatch: false
    }
  }
  willWatch =() => {
    const { addMovieToWillWatch, removeMovieFromWillWatch } = this.props;
    this.setState(prevState => ({
        willwatch: !this.state.willwatch
      }));
      this.state.willwatch
          ? removeMovieFromWillWatch(this.props)
          : addMovieToWillWatch(this.props)
  }
  render() {
    const movie = this.props.movies;
    const { willwatch } = this.state;
    console.log(this.props)
    return (
      <div className="col-4 mb-4" key={this.props.movies.id}>
        <div className="card" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="" className="card-img-top" />
          <div className="card-body">
            <h6 className="card-title">{movie.title}</h6>
            <div className="d-flex justify-content-between align-items-center">
              <p className="mb-0">Rating: {movie.vote_average}</p>
              <button
                type="button"
                className={`btn ${willwatch ? "btn-success" : "btn-secondary"}`}
                onClick={this.willWatch}
              >
                Will Watch
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;
