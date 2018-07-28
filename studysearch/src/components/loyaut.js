import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Titlepage from "./Titlepage/Titlepage";
import Searchpage from "./Searchpage/Searchpage";
import Pagenot from "./404/404";
class Loyaut extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Titlepage} />
          <Route path="/search" component={Searchpage} />
          <Route component={Pagenot} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Loyaut;
