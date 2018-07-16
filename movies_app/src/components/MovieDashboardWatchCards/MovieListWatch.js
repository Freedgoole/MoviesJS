import React, { Component } from "react";


class ListWatch extends Component {
   
  render() {
    let {moviesWillWatch} = this.props;
   
    return (
        <div style={{ position: "fixed" }}>
        <h4>Will Watch: { moviesWillWatch.length} movies</h4>
        <ul className="list-group">
          { moviesWillWatch.map( element => (
            <li className="list-group-item">
              <div className="d-flex justify-content-between">
                <div>{element.movies.title}</div>
                <div>{element.movies.vote_average}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListWatch;
