import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./TopSearchitem.css";

class TopSearchitem extends Component {
  render() {
    return (
      <li className="item">
        <h4 className="item-title">
          <a href={this.props.top.link}>{this.props.top.title}</a>
        </h4>
        <p>top</p>
        <span className="item-link">{this.props.top.link.substr(8)}</span>
        <p className="item-txt">{this.props.top.descr}</p>
        <div className="item-d-w">
          <div className="item-d-coll">
            <h3>Samples</h3>
            <p>
              These samples show that our writers comply with the highest ...
            </p>
          </div>
          <div className="item-d-coll">
            <h3>Essay Writer</h3>
            <p>
              Personal Essay Writer Online, A Reputation That Builds
              Reliability.
            </p>
          </div>
          <div className="item-d-coll">
            <h3>Buy Essay</h3>
            <p>
              Buy Essay at MasterPapers , you will not regret it !!! Our essays
              ...
            </p>
          </div>
          <div className="item-d-coll">
            <h3>Admission Essay</h3>
            <p>Struggling to write a good admission essay? Order one at ...</p>
          </div>
        </div>
      </li>
    );
  }
}

export default TopSearchitem;
