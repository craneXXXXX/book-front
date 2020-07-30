import React, { Component } from 'react'
// import { SearchBar } from "antd-mobile";
import "../assets/css/home.css";
import { BarsOutlined } from "@ant-design/icons";
import HomeSwiper from '../component/home/Swiper'
import ClassifyList from '../component/home/ClassifyList'
import SecondKill from '../component/home/SeondKill'
import Search from '../component/home/Search'


export default class Home extends Component {
    constructor(props){
        super(props);
        this.state={
        }
    }
    render() {
        
        return (
          <div>
            <div className="home-header">
              <div className="header-logo">BOOK</div>
              <Search></Search>
              <div className="header-classify">
                <BarsOutlined />
              </div>
            </div>
            <div className="swiper">
              <HomeSwiper></HomeSwiper>
            </div>
            <div className="classify-list">
              <ClassifyList></ClassifyList>
            </div>
            <div className="second-kill"><SecondKill></SecondKill></div>
          </div>
        );
    }
}
