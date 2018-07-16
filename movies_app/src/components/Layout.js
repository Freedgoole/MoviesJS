import React, { Component } from "react";

//components
import Movies from './MovieDashboardCards/MovieDashboardCards'
import MovieListWatch from './MovieDashboardWatchCards/MovieListWatch'



class Layout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            moviesWillWatch: []
        }
    }
    addMovieToWillWatch = movie => {
        this.setState(prevState => ({
          moviesWillWatch: [...prevState.moviesWillWatch, movie]
        }));
      };

      removeMovieFromWillWatch = movie => {
        this.setState(prevState => ({
          moviesWillWatch: prevState.moviesWillWatch.filter(
            item => item.movies.id !== movie.movies.id
          )
        
        }));
        // console.log(movie.)
    };

  render() {
    const { moviesWillWatch } = this.state;
    return (
      <div className="container">
        <div className="row mt-4">        
            <Movies 
            addMovieToWillWatch={this.addMovieToWillWatch} 
            removeMovieFromWillWatch={this.removeMovieFromWillWatch} 
            />    
            <div className="col-3" >
            <MovieListWatch 
            moviesWillWatch={moviesWillWatch}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
