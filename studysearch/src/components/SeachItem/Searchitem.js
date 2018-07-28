import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./searchitem.css";
import TopSearchitem from "../TopSearchitem/TopSearchitem";

class Searchitem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li className="item">
        <h4 className="item-title">
          <a href={this.props.item.link}>{this.props.item.title}</a>
        </h4>
        <span className="item-link">{this.props.item.link.substr(8)}</span>
        <p className="item-txt">{this.props.item.descr}</p>
      </li>
    );
  }
}

export default Searchitem;
