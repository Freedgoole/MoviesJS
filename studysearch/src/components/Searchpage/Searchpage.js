import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./seashpage.css";

import Searchitem from "../SeachItem/Searchitem";
import Pagination from "./Paginations";
import TopSearchitem from "../TopSearchitem/TopSearchitem";

import { data } from "../../Listdatabace";

class Searchpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      currentPage: 0,
      count: data.length,
      offset: 10,
      value: ""
    };
  }
  changePage = n => {
    this.setState({
      currentPage: n
    });
  };

  url() {
    let utm = document.URL;
    let from = utm.search("utm_campaign");
    let to = utm.search("utm_replace");
    let newstr = utm.substring(from + 13, to - 1);

    return newstr;
  }
  render() {
    const { data, offset, currentPage, count } = this.state;
    const start = currentPage * offset;
    const end = (+currentPage + 1) * offset;
    let ret = () => {
      let a = 4;
      return <TopSearchitem top={data[a]} />;
    };

    return (
      <div>
        <div className="wr">
          <header>
            <div className="cnrt">
              <div className="header-top">
                <div className="header-logo"> </div>{" "}
                <div className="header-input">
                  <input
                    type="text"
                    className="input-search"
                    value={this.url()}
                  />
                </div>{" "}
              </div>{" "}
              <div className="header-bottom">
                <div className="header-contant">
                  <div className="header-variable">
                    <div className="variable"> All </div>{" "}
                    <div className="variable"> Customers </div>{" "}
                  </div>{" "}
                  <div className="header-popular">
                    <div className="variable"> Popular </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </header>{" "}
          <div className="cnrt">
            <p className="result-static">
              {" "}
              About {data.length}
              results(0.42 seconds){" "}
            </p>{" "}
            <div className="seach-container">
              {" "}
              {data.length &&
                data.slice(start, end).map((item, i) => {
                  return <Searchitem className="comment" key={i} item={item} />;
                })}{" "}
              <Pagination
                pages={Math.ceil(count / offset)}
                current={currentPage}
                onChangePage={this.changePage}
                margin={5}
              />{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default Searchpage;
