import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Pagination extends Component {
    constructor(props) {
        super(props)
    }
      onChangePage = e => {
    const id = e.target.dataset.page;
    this.props.onChangePage(id);
  };
  render() {
    const { pages, current,margin } = this.props;
    let a = [];
    for (let i = 0; i < pages; i++) {
        a.push(
          <li
            data-page={i}
            onClick={this.onChangePage}
            key={i}
            className={"item" + (i == current ? " active" : "")}
          >
            {i+1}
          </li>
        );
      }
      
      return <ul className="pagi">{a}</ul>;
    }
  }


export default Pagination;
