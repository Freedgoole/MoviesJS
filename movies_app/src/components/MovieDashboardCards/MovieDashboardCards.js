import React, { Component } from "react";

import Movie from "../MovieCard/MovieCard";
import { moviesData } from "./moviesData";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: moviesData
    };
    console.log(this.props.addMovieToWillWatch)
  }
  render() {
    const {
        addMovieToWillWatch,removeMovieFromWillWatch
      } = this.props;
    return (
      <div className="col-9">
        <div className="row">
          {moviesData.map( element => <Movie keys={element.id} movies={element} addMovieToWillWatch={addMovieToWillWatch} removeMovieFromWillWatch={removeMovieFromWillWatch}/>)}
        </div>
      </div>
    );
  }
}

export default Movies;
