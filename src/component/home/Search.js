import React, { Component } from 'react'
import "../../assets/css/home/search.css";
import { SearchOutlined } from "@ant-design/icons";

export default class Search extends Component {
    render() {
        return (
          <div>
            <div className="header-search">
              <input type="text" />
              <SearchOutlined className="home-search-icon"></SearchOutlined>
            </div>
          </div>
        );
    }
}
