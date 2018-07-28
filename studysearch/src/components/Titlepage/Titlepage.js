import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Redirect } from "react-router-dom";
import './titlestyle.css'

class Titlepage extends Component {
  constructor(props) {
    super(props);
  }
  redi = () => {
    console.log(this.props);
    this.props.history.push("/search");
  };
  render() {
    return (
      <div className="wr-global">
        <div className="wr-input">
          <input type="text" className="input-gl"/>
          <button onClick={this.redi} className="btn">Google Search</button>
          <button onClick={this.redi} className="btn">I'm Feeling Lucky</button>
        </div>
      </div>
    );
  }
}

export default Titlepage;
